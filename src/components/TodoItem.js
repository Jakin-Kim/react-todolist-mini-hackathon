// 각각의 할 일 항목인 TodoItem 컴포넌트
import React from 'react';
import styled, { css } from 'styled-components';
// react-icons 중에서 체크(MdDone)와 휴지통(MdDelete) 아이콘 사용하기
import { MdDone, MdDelete } from 'react-icons/md'; 

// 삭제하기 컴포넌트 (휴지통 아이콘)
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

// 할 일 컴포넌트
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
  // Component
    ${Remove} {
      display: initial;
    }
  }
`;

// 할 일 체크하기 (체크 아이콘)
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// 할 일 입력 컴포넌트
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
    return (
      <TodoItemBlock>
        <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove>
          <MdDelete />
        </Remove>
      </TodoItemBlock>
    );
  }

  export default TodoItem;