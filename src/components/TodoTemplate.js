// 전체 todo list의 레이아웃을 설정하는 컴포넌트
import React from "react";
import styled from "styled-components";

// 전체 TodoTemplate이 될 컴포넌트
  // 컴포넌트 태그 사이에 넣은 값을 조회하고자 할 때 사용하는 특수한 'props.children'을 비구조화 할당으로 표현
const TodoTemplate = ({ children }) => {
    // console.log(children)
    return (
        <TodoTemplateBlock>{ children }</TodoTemplateBlock>
    );
}

// 전체 Todo 프레임 틀을 디자인하는 styled-component
const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정(요소 자기 자신의 원래 위치(static일 때의 위치)를 기준으로 배치) */ 
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04); /* offset-x | offset-y | blur-radius | spread-radius | color */

    margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

    /* 안에 구성되는 모든 요소들을 column으로 정렬하기 위해 flex 사용 */
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

export default TodoTemplate;