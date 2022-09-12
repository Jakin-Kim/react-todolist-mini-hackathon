import React, { useState, useEffect }from "react";
import uuid from 'react-uuid';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate'; // 1.
import TodoHead from './components/TodoHead'; // 2.
import TodoItemList from "./components/TodoItemList"; // 3.
import TodoItem from "./components/TodoItem"; // 3-1.
import TodoCreate from './components/TodoCreate'; // 4.
import URL from './components/URL';

// 화면 전체에 회색 배경색 적용하기(todo list와 구분하기 위해)
const GlobalStyle = createGlobalStyle`
    body {
      background-color: #e9ecef;
    }
`;


function App() {

  useEffect(() => {
    fetch(`${URL}/items`)
    .then(res => res.json())
    .then(data => setList(data))
    .catch(err => console.log(err))
  },[]);

  const [list, setList] = useState([]);
  const [id, setId] = useState(uuid());
  const [todo, setTodo] = useState('');
  const [done, setDone] = useState(false);

  // console.log(list)

  // 함수 undoneTasks => <TodoHead>
  // const undoneTasks = () => {

  // };

  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead /> 
        <TodoItemList
          id={id}
          setId={setId} 
          todo={todo} 
          list={list} 
          done={done} 
          setDone={setDone}/>
        <TodoCreate 
          id={id}
          setId={setId}
          todo={todo}
          setTodo={setTodo}
          done={done} 
          list={list} 
          setList={setList}/>
      </TodoTemplate>
    </>
  );
}

export default App;
