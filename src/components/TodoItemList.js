import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

// 여러개의 할 일 리스트를 보여줄 TodoList 컴포넌트
function TodoItemList() {
  const todos = useTodoState();
  
  return (
    <TodoListBlock>
      {todos.map(todo => 
        <TodoItem 
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      )}
      {/* <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} /> */}
    </TodoListBlock>
  );
}

// 모든 TodoItem 컴포넌트를 감싸는 styled-component
const TodoListBlock = styled.div`
  flex: 1; // 자신이 차지하는 영역을 꽉 채우도록 설정
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; // y축으로 내용들이 overflow 되면 어떻게 보여줄지 정해준다.
  /* background: gray; // 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
  `;
  
  export default TodoItemList 