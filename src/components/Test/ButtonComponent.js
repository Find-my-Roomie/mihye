import React from 'react';
import styled from 'styled-components'
import {darken, lighten} from 'polished';

const Button = styled.button`
  
  /* 기본 스타일 */
  font-family: "jua";
  font-size: 1.8rem;

  border-color: black;
  border-width: 4px;
  border-radius: 10px;
  cursor: pointer;
  
  top: 20px;
  position: relative;
  margin-bottom: 5px;

  /* 크기 */
  height: 65px;
  width: 750px;
  font-weight: 100;

  /* 색상 */
  background: #FFF6A9;
  &:hover {
    background: ${lighten(0.1, '#E877FB')};
  }
  &:active {
    background: ${darken(0.1, 'grey')};
`

function ButtonComponent({ type, text, onclick}) {

    const onClickBtn = () => {
        onclick();
    }


    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default ButtonComponent;