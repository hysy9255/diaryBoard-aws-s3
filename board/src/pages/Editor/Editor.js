import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import API from '../../API/API';

const Editor = () => {
  const [contents, setContents] = useState('');
  const quillRef = useRef(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();

          input.onchange = () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('file', file);

            fetch(`${API.uploadImg}`, {
              method: 'POST',
              body: formData,
            })
              .then(res => res.json())
              .then(data => {
                const range = quillRef.current.getEditor().getSelection();
                const img = data.imageUrl;
                quillRef.current
                  .getEditor()
                  .insertEmbed(range.index, 'image', img);
              });
          };
        },
      },
    },
  };

  console.log(contents);

  const inputHandler = value => {
    setContents(value);
  };

  return (
    <Container>
      <StyledQuill
        modules={modules}
        value={contents}
        onChange={inputHandler}
        ref={quillRef}
      />
    </Container>
  );
};

export default Editor;

const Container = styled.div``;

const StyledQuill = styled(ReactQuill)`
  max-width: 800px;
  height: 600px;
  @media screen and (min-width: 200px) and (max-width: 480px) {
    height: 80vh;
  }
`;
