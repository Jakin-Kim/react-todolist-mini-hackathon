import React from "react";
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoItemList from "./components/TodoItemList";

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
      </TodoTemplate>
    </>
  );
}

export default App;
