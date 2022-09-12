import React, {  } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

// 여러개의 할 일 리스트를 보여줄 TodoList 컴포넌트
function TodoItemList({ id, setId, todo, list, done, setDone }) {
  // console.log(list[0]);
  return (
    <TodoListBlock>
      {list.map(item => {
        return <TodoItem 
            text={item.text} 
            key={item.id}
            todo={todo}
            item={item} 
            done={done}
            setDone={setDone}/>
      })}
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