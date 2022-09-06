// 각 할 일에 대한 정보를 렌더링해주는 컴포넌트
  /* 
  <새롭게 학습한 내용> 
  1. styled-components의 css함수 사용방법: styled-component에서 제공하는 css함수로 여러 개의 CSS 속성을 묶어서 정의할 수 있다.
  2. Components Selector 사용방법: CSS선택자의 body 안에 특정 컴포넌트를 JS삽입식으로 표현하고 디자인할 수 있다.
  3. 가상클래스(:hover) 사용방법
  */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// react-icons 중에서 체크(MdDone)와 휴지통(MdDelete) 아이콘 사용하기
import { MdDone, MdDelete } from 'react-icons/md'; 

// 할 일 styled-component
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    // Component Selector 기능: 마우스 커서가 있을 때, Remove 컴포넌트를 CSS 선택자로 가져와서 스타일을 부여할 수 있다.
    ${Remove} { 
      display: initial;
    }
  }
`;

// 할 일 체크하기 styled-component (체크 아이콘 - MdDone)
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
  ${props => // 하나의 prop 만으로 여러가지 CSS 속성이 한 번에 적용된 props를 만들어주기 위해 사용
    props.done &&
    css` // styled-component에서 제공하는 css함수로 여러 개의 CSS 속성을 묶어서 정의할 수 있다.
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// 할 일 입력 styled-component
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => // 하나의 prop 만으로 여러가지 CSS 속성이 한 번에 적용된 props를 만들어주기 위해 사용
    props.done &&
    css` // styled-component에서 제공하는 css함수로 여러 개의 CSS 속성을 묶어서 정의할 수 있다.
      color: #ced4da;
    `}
`;

// 삭제하기 styled-component (휴지통 아이콘 - MdDelete)
const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer; // 마우스 커서가 올라갔을 때(호버 시) 보여줄 모양
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

// 전달한 props(id, done, text)들은 추후 데이터를 다룰 때 사용한다.
function TodoItem({ text }) {
  const [done, setDone] = useState(false);

  const handleCheck = () => {
    (!done) ? setDone(!done) : setDone(!done);
  }

  const handleRemove = () => {
    
  }

  return (
    <TodoItemBlock>
      <CheckCircle 
          done={done}
          onClick={handleCheck} > 
        {done && <MdDone />} 
      </CheckCircle>
      <Text 
          done={done}> 
        {text} 
      </Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;