import React from 'react';
import { styled } from 'styled-components';
import { FcDocument } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const ListBox = ({ data }) => {
  console.log(data);
  const navigate = useNavigate('');

  const clickHandler = () => {
    navigate('/postpage', { state: { diaryId: data.diaryId } });
  };

  return (
    <Container onClick={clickHandler}>
      <ImgSection>
        {data.thumbnail ? (
          <Img src={data.thumbnail} />
        ) : (
          <FcDocument size="150px" />
        )}
      </ImgSection>
      <TitleSection>{data.title}</TitleSection>
    </Container>
  );
};

export default ListBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`;

const ImgSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-height: 150px;
`;

const TitleSection = styled.section`
  display: flex;
  align-items: center;
  border-top: 2px solid #ddd;
  font-size: 18px;
  height: 40px;
  padding: 0 20px;
`;
