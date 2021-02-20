import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import {darken, lighten} from 'polished';
import dorm from '../components/Test/img/dorm.jpg';

const GlobalStyle = createGlobalStyle`
  body{
    margin: auto;
    padding: 50px;
    background-color: #7561FF;
    text-align: center;
    justify-content: center;
  }
`

const Title = styled.h1`
  font-family: "RAVIE";
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '4rem'};
  font-weight: 50000;
  line-height: 20px;
  top: 0;
  position: relative;
`;

const Desc = styled.h3`
  font-family: "jua";
  text-align: center;
  font-size: 1.8rem;
  font-weight: lighter;
  color: black;
  line-height: 10px;
`;

const StartButton = styled.button`
  
  /* 기본 스타일 */
  font-family: "jua";
  font-size: 1.8rem;

  border-color: black;
  border-width: 4px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;

  /* 크기 */
  height: 60px;
  width: 200px;
  font-weight: 100;

  /* 색상 */
  background: #FFF6A9;
  &:hover {
    background: ${lighten(0.1, '#E877FB')};
  }
  &:active {
    background: ${darken(0.1, 'grey')};
`

function Start({type, onClick}){

    const onClickBtn = () => {
        onClick();
    }

      return (
        <>
          <GlobalStyle/>
            <Title>findmyRoomie</Title>
            <Title color='black' fontSize='2rem'>나의 Roomie를 찾아줘</Title>
                <img
                img src={dorm}
                width={700}
                height={500}
                />
            <Desc>나에게 맞는 기숙사 룸메이트는 누구일까?</Desc>
            <Desc>findmyRoomie는 당신의 Roomie 유형을 측정하고</Desc>
            <Desc>이 유형을 바탕으로 당신의 기숙사 Roomie를 추천해드립니다!</Desc>
            <StartButton type={type} onClick={onClickBtn}>시작하기</StartButton>
        </>
    
      );
}

export default Start;