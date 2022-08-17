import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate'; // 1.
import TodoHead from './components/TodoHead'; // 2.
import TodoItemList from "./components/TodoItemList"; // 3.
import TodoItem from "./components/TodoItem"; // 3-1.
import TodoCreate from './components/TodoCreate'; // 4.

// 화면 전체에 회색 배경색 적용하기(todo list와 구분하기 위해)
const GlobalStyle = createGlobalStyle`
    body {
      background-color: #e9ecef;
    }
`;


function App() {

  // 함수 undoneTasks => <TodoHead>

  // 함수 todos => <TodoList/> -> <TodoItem/>
  // 함수 onRemove => <TodoList/> -> <TodoItem/>
  // 함수 onToggle => <TodoList/> -> <TodoItem/>

  // 함수 onCreate => <TodoCreate/>

  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead /> 
        <TodoItemList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
