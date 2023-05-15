import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const EditBtn = ({ data }) => {
  const navigate = useNavigate('');

  const editHandler = () => {
    if (window.confirm('수정하시겠습니까?')) {
      navigate('/editor', { state: { data: data } });
    }
  };

  return (
    <Button onClick={editHandler}>
      <AiFillEdit size="30px" />
    </Button>
  );
};

export default EditBtn;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: #ddd;
  }
`;
