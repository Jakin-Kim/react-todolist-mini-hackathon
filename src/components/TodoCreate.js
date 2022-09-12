// 새로운 할 일을 등록할 수 있게 해주는 컴포넌트
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import URL from './URL'

// 새로운 할 일을 추가하는 컴포넌트
function TodoCreate({ id, list, setList, done, todo, setTodo }) {

  const [open, setOpen] = useState(false);
  
  const onToggle = () => setOpen(!open);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const newTodo = {
    "id": id,
    "todo": todo,
    "done": done,
  };

  // console.log(newTodo)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`${URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    })
    .then(res => res.json())
    .then(data => setList(data))
    .catch(err => err);
  };

  return (
    <>
      {(open) && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input autoFocus type="text" id="todo" value={todo} placeholder="할 일을 입력 후, Enter 를 누르세요" 
              onChange={handleChange}
              />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

// 원형 토글(클릭 시, input값 생성 및 삭제)버튼 styled-component
const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

// 입력폼 크기 및 범위를 정하는 styled-component
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

// 토글 버튼으로 생성된 입력폼의 위치를 디자인하는 styled-component
const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

// 입력(input)되는 내용 styled 컴포넌트
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default TodoCreate;