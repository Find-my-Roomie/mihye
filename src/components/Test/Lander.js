import React, {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import {darken, lighten} from 'polished';
import dorm from './img/dorm.jpg';
import night from './img/night.jpg';
import myroom from './img/myroom.jpg';
import roomie from './img/roomie.jpg';
import img from './img.css';
import index from '../../styles/index.css'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 5px;
    padding: 50px;
    background-color: #7561FF;
  }
`

const Box = styled.div`
  background: white;
  width: 800px;
  height: 80vh;
  border-radius: 20px;
`

const Title = styled.h1`
  font-family: "13";
  text-align: center;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '4rem'};
  font-weight: 50000;
  line-height: 20px;
  top: 0;
  position: relative;
`;

const Ques = styled.h1`
  font-family: "3";
  text-align: center;
  font-size: ${props => props.fontSize || '2.8rem'};
  color: ${props => props.color || 'black'};
  font-weight: 300;
  line-height: 20px;
  top: 40px;
  position: relative;
`;


const Desc = styled.h3`
  font-family: "3";
  text-align: center;
  font-size: 1.8rem;
  font-weight: lighter;
  color: black;
  line-height: 10px;
`;

const Button = styled.button`
  
  /* 기본 스타일 */
  font-family: "3";
  border-color: black;
  border-width: 4px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.6rem;
  top: ${props => props.top || '20px'};
  margin-bottom: 5px;
  position:relative;
  /* 크기 */
  height: 60px;
  width: ${props => props.width || '750px'};
  font-weight: 100;
  /* 색상 */
  background: #FFF6A9;
  &:hover {
    background: ${lighten(0.1, '#E877FB')};
  }
  &:active {
    background: ${darken(0.1, 'grey')};
`


function Lander(){
  const contents = [
    {
      'question': '기숙사 통금 시간이 30분 남았는데 친구가 더 놀자고 한다. 이 때 당신은?',
      'answers' :[
        {
          Button: '1. 외박은 안되니 친구의 제안을 거절하고 기숙사로 돌아온다.',
          score: ''
        },
        {
          Button: '2. 이 때가 기회라고 생각하고 밤새서 논다.',
          score: ''
        }
      ]
    },

    {
      'question': '기숙사 통금 시간이 30분 남았는데 친구가 더 놀자고 한다. 이 때 당신은?',
      'answers' :[
        {
          Button: '1. 외박은 안되니 친구의 제안을 거절하고 기숙사로 돌아온다.',
          score: ''
        },
        {
          Button: '2. 이 때가 기회라고 생각하고 밤새서 논다.',
          score: ''
        }
      ]
    },

    
  ]

  const [page, setPage] = useState(0);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 4));
  
  const pageUp = () => setPage(page+1);

  switch (page){
    case 0:
      return (
        <>
          <GlobalStyle/>
            <Title>findmyRoomie</Title>
            <Title color='black' fontSize='2rem'>나의 Roomie를 찾아줘</Title>
            <img
              img src={dorm}
              className="center"
              width={700}
              height={500}
            />
            <Desc>나에게 맞는 기숙사 룸메이트는 누구일까?</Desc>
            <Desc>findmyRoomie는 당신의 Roomie 유형을 측정하고</Desc>
            <Desc>이 유형을 바탕으로 당신의 기숙사 Roomie를 추천해드립니다!</Desc>
            <Button className="center" top="0" width="200px" onClick={pageUp}>시작하기</Button>
        </>
      );
    case 1:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>기숙사 통금 시간이 30분 남았는데</Ques>
            <Ques>친구가 더 놀자고 한다. 이 때 당신은?</Ques>
            <img
            img src={night}
            className="testimg"
            width={450}
            height={450}
            />
            <Button className="center" onClick={pageUp}>1. 외박은 안되니 친구의 제안을 거절하고 기숙사로 돌아온다.</Button>
            <Button className="center" onClick={pageUp}>2. 이 때가 기회라고 생각하고 밤새서 논다.</Button>
          </Box>
        </>
      );
    case 2:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>시험기간 중 가장 좋아하는 공부 장소는?</Ques>
            <img
            img src={myroom}
            className="testimg"
            width={700}
            height={360}
            />
            <Button className="center" onClick={pageUp}>편한게 최고지! 내 방</Button>
            <Button className="center" onClick={pageUp}>멀리가긴 귀찮아.. 기숙사 내 스터디룸</Button>
            <Button className="center" onClick={pageUp}>포기할 수 없는 카공(카페)</Button>
            <Button className="center" onClick={pageUp}>ecc 열람실 셀프 감금/공댕이는 공도!</Button>
          </Box>
        </>
      );
    case 3:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>기숙사 입사 후 처음으로</Ques>
            <Ques>룸메이트를 마주친 당신의 행동은?</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={450}
            height={450}
            />
            <Button className="center" onClick={pageUp}>1. "번호가 어떻게 되세요?" 그 자리에서 기숙사 카톡방을 만든다.</Button>
            <Button className="center" onClick={pageUp}>2. 앗... 안녕하세요...(뻘줌한 듯 시선을 방황하며 눈인사)</Button>
            </Box>
        </>
      );

      case 4:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques fontSize='2rem'>배가 고프지만 밤 11시라 기숙사 편의점이 문을 닫았다.</Ques>
            <Ques fontSize='2rem'>거실에는 아직 어색한 룸메이트의 컵라면이 있다. 당신의 행동은?</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={700}
            height={400}
            />
            <Button className="center" onClick={pageUp}>1. 스스럼 없이 룸메이트에게 연락해 먹어도 되는지 물어본다.</Button>
            <Button className="center" onClick={pageUp}>2. 20분 거리의 기숙사 밖 편의점에 다녀온다.</Button>
            <Button className="center" onClick={pageUp}>3. 일단 배고프니 먹고 나중에 생각한다.</Button>
            </Box>
        </>
      );

      case 5:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques fontSize='2.3rem'>쓰레기 당번을 잘 안 지키는 룸메가 못마땅한 당신!</Ques>
            <Ques fontSize='2.3rem'>이번에도 룸메가 쓰레기를 안치웠다. 당신의 행동은?</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={450}
            height={450}
            />
            <Button className="center" onClick={pageUp}>1. "너 오늘 당번인데 어디야?" 바로 분노의 카톡을 한다.</Button>
            <Button className="center" onClick={pageUp}>2. 연락할까 말까 고민하다가 결국 직접 치운다.</Button>
            </Box>
        </>
      );

      case 6:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>볼 일 보고 집에 들어온 당신,</Ques>
            <Ques>눈에 들어온 당신의 방 상태는?</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={450}
            height={450}
            />
            <Button className="center" onClick={pageUp}>1. 이불은 널브러져 있고 책상엔 쓰레기, 바닥엔 지우개 똥이 한 가득</Button>
            <Button className="center" onClick={pageUp}>2. 잘 개어져 있는 이불, 깔끔한 책상. 바닥엔 먼지 한 톨 없이 깔끔~</Button>
            </Box>
        </>
      );

      case 7:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>욕실에서 머리를 감은 후 나는...</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={500}
            height={480}
            />
            <Button className="center" onClick={pageUp}>1. '아 개운하다~' 바로 방으로 들어온다.</Button>
            <Button className="center" onClick={pageUp}>2. 머리카락을 남기면 안되지! 바로 버린다.</Button>
            </Box>
        </>
      );

      case 8:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>청소기는...</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={500}
            height={480}
            />
            <Button className="center" onClick={pageUp}>1. 하루에 한 번은 무조건 돌려야지!.</Button>
            <Button className="center" onClick={pageUp}>2. 별로 먼지도 없어보이는데... 좀 더러워지면 돌려야지~</Button>
            </Box>
        </>
      );

      case 9:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>내일 아침 7시에 꼭 일어나야 한다.</Ques>
            <Ques>알람을 어떻게 설정하까?</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={450}
            height={450}
            />
            <Button className="center" onClick={pageUp}>1. 6시 55분, 6시 56분, 6시 57분, 6시 58분… 절대 한 번에 못 일어나!</Button>
            <Button className="center" onClick={pageUp}>2. 7시 알람 하나면 충분해~ 알람을 듣고 어떻게 계속 잘 수가 있어?</Button>
            </Box>
        </>
      );

      case 10:
      return(
        <>
          <GlobalStyle />
          <Box className="center">
            <Ques>할 일을 다 마치고 어느새 시간은 밤 10시.</Ques>
            <Ques>오늘의 남은 시간 동안 당신은?</Ques>
            <img
            img src={roomie}
            className="testimg"
            width={450}
            height={450}
            />
            <Button className="center" onClick={pageUp}>1. 벌써 잘 시간이네Zzz 조금 쉬다가 한시간 이내로 자야겠다!</Button>
            <Button className="center" onClick={pageUp}>2. 아직 자려면 멀었네. 조금 놀다가 새벽에 자야지~!</Button>
            </Box>
        </>
      );

      case 11:
      return(
        <>
          <GlobalStyle/>
            <Ques color='white' fontSize='4.5rem'>당신은 ~타입!</Ques>
            <Ques fontSize='2rem'>간단한 설명</Ques>
            <img
              img src={dorm}
              className="testimg"
              width={700}
              height={500}
            />
            <Desc>자세한 설명</Desc>
            <Desc>잘 맞는 타입: ____  안 맞는 타입: ____</Desc>
        </>
      );
  }
}

export default Lander;