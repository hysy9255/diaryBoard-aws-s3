import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { FcRules } from 'react-icons/fc';
import API from '../../API/API';
import ListBox from './ListBox';
import { useNavigate } from 'react-router-dom';

const PostLists = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate('');

  useEffect(() => {
    fetch(`${API.diary}/list`)
      .then(res => res.json())
      .then(data => setData(data.diaries));
  }, []);

  return (
    <Container>
      <Header>
        <Title>DIARY</Title>
        <Button
          onClick={() => {
            navigate('/editor');
          }}
        >
          글쓰기
        </Button>
      </Header>
      <Body>
        {data?.map(data => {
          return <ListBox data={data} key={data.diaryId} />;
        })}
      </Body>
    </Container>
  );
};

export default PostLists;

const Container = styled.div`
  max-width: 480px;
  margin: auto;
  border: 2px solid #ddd;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #ddd;
`;

const Title = styled.p`
  margin: 10px;
  font-size: 24px;
`;

const Button = styled.button`
  margin: 10px;
  width: 60px;
  height: 40px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Body = styled.div`
  height: 90vh;
  overflow: scroll;
`;
