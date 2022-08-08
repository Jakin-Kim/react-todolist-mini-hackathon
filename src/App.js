import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoItemList from "./components/TodoItemList";
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #e9ecef;
    }
`;


function App() {
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
