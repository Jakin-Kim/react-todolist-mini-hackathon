import React, { useReducer, createContext } from 'react';

const CREATE = 'CREATE';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state, action) {
  switch(action.type) {
    case CREATE:
      return state.concat(action.todo);
    case TOGGLE:
      return state.map(todo => 
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE:
      return state.filter(todo => todo.id !== action.id);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 하나의 Context에 state와 dispatch를 넣지 않고 
// 따로 따로 넣어 불필요한 렌더링을 방지하기
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
