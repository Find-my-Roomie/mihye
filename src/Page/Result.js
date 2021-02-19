import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import dorm from '../components/Test/img/dorm.jpg';
import index from '../styles/index.css'
import resultType from '../contents/resultType';

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
  font-family: "jua";
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '4rem'};
  font-weight: lighter;
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


function Result({num}){
      return (
        <>
          <GlobalStyle/>
            <Title>당신은 {resultType[num].result}</Title>
            <Title color='black' fontSize='2rem'>간단한 설명</Title>
                <img
                img src={dorm}
                width={700}
                height={500}
                />
            <Desc>자세한 설명</Desc>
            <Desc>잘 맞는 타입: {resultType[num].GoodRoomie}</Desc>
            <Desc>안 맞는 타입: {resultType[num].BadRoomie}</Desc>
        </>
    
      );
}

export default Result;