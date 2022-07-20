import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  /* background: gray; 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
  `;

// 여러개의 할 일 리스트를 보여줄 TodoList 컴포넌트
function TodoItemList() {
    return <TodoListBlock>TodoList</TodoListBlock>;
  }
  
  export default TodoItemList 