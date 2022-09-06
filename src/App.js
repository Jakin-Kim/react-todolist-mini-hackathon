import React, { useState, useEffect }from "react";
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

  // console.log('1')

  useEffect(() => {
    fetch('http://localhost:3001/items')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setList(data))
    // .then(data => console.log('2'))
    .catch(err => console.log(err))
  },[]);

  const [list, setList] = useState([]);
  const [todo, setTodo] = useState('');
  // console.log(list)
  // console.log('3')

  // 함수 undoneTasks => <TodoHead>
  const undoneTasks = () => {

  };

  const handleCreate = (e) => {
    if(e.key === 'Enter') {
      setTodo(todo)
    }
  }

  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead /> 
        <TodoItemList todo={todo} list={list}/>
        <TodoCreate onCreate={handleCreate} list={list}/>
      </TodoTemplate>
    </>
  );
}

export default App;
