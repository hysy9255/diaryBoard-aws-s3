import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import API from '../../API/API';

const DeleteBtn = ({ diaryId }) => {
  const navigate = useNavigate('');

  const deleteHandler = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`${API.diary}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ diaryId: diaryId }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'success') {
            alert('삭제되었습니다.');
            navigate('/');
          }
        });
    }
  };

  return (
    <Button onClick={deleteHandler}>
      <AiFillDelete size="30px" />
    </Button>
  );
};

export default DeleteBtn;

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
