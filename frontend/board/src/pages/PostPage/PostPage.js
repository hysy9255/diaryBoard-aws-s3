import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import API from '../../API/API';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

const PostPage = () => {
  const [data, setData] = useState([]);
  const diaryId = useLocation().state.diaryId;

  useEffect(() => {
    fetch(`${API.diary}?diaryId=${diaryId}`)
      .then(res => res.json())
      .then(data => setData(data.diary));
  }, []);

  return (
    <Container>
      <Header>
        {data.title}
        <UtilBox>
          <EditBtn data={data} />
          <DeleteBtn diaryId={data.diaryId} />
        </UtilBox>
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: data.contents }} />
    </Container>
  );
};

export default PostPage;

const Container = styled.div`
  max-width: 480px;
  margin: auto;
  border: 2px solid #ddd;
  border-radius: 5px;
  min-height: 95vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 24px;
  padding: 0 20px;
  border-bottom: 2px solid #ddd;
`;

const UtilBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;
`;

const Body = styled.div`
  padding: 20px;
`;
