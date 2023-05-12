import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import API from '../../API/API';

const Editor = () => {
  const navigate = useNavigate('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const quillRef = useRef(null);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image'],
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
                  const img = data.imageUrl;
                  setContents(
                    prevContent => `${prevContent}<img src="${img}" alt='img'/>`
                  );
                  if (thumbnail.length === 0) {
                    setThumbnail(img);
                  }
                })
                .catch(err => console.log(err));
            };
          },
        },
      },
    };
  }, []);

  const inputHandler = value => {
    setContents(value);
  };

  const titleHandler = e => {
    setTitle(e.target.value);
  };

  const createPost = () => {
    if (!title || !contents) return;
    fetch(`${API.createDiary}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        contents: contents,
        thumbnail: thumbnail,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'success') {
          navigate('/');
        }
      });
  };

  return (
    <Container>
      <Title
        type="text"
        value={title}
        onChange={titleHandler}
        placeholder="제목을 입력하세요"
      />
      <SubmitBtn onClick={createPost}>게시글 등록</SubmitBtn>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: auto;
`;

const Title = styled.input`
  max-width: 600px;
  padding: 10px;
`;

const StyledQuill = styled(ReactQuill)`
  max-width: 800px;
  height: 600px;
  margin: 5px 0;
  @media screen and (min-width: 200px) and (max-width: 480px) {
    height: 70vh;
  }
  .ql-editor {
    line-height: 1.5;
    overflow: scroll;
  }
`;

const SubmitBtn = styled.button`
  height: 30px;
`;
