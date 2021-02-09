import React,{useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import dorm from '../components/Test/img/dorm.jpg';
import index from '../styles/index.css'
import Test from '../components/Test/Test';

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


function Result({score}){

  const [num, setNum] = useState(0);

  const resultType = ({score}) =>{
    var scoreOutgoing = score[0]*0.7 + score[1]*0.3;
    if (scoreOutgoing>=5) {
      scoreOutgoing = 'W';
    }
    else scoreOutgoing = 'H';

    var scoreSociable = score[2]*0.5 + score[3]*0.3+score[4]*0.2;
    if (scoreSociable>=5) scoreSociable = 'E';
    else scoreSociable = 'I';

    var scoreNeat = score[5]*0.6 + score[6]*0.2+score[7]*0.2;
    if (scoreNeat>=5) scoreNeat = 'S';
    else scoreNeat = 'D';

    var scoreNight = score[8]*0.6 + score[9]*0.4;
    if (scoreNight>=5) scoreNight = 'O';
    else scoreNight = 'C';

    var type = scoreOutgoing +scoreSociable+scoreNeat+scoreNight;
    
    TotalresultType({type});
  }

  const TotalresultType=({type})=>{
    
    var TotalType = [
      'WESO', 'WESC', 'HISO', 'HISC',
      'WISO', 'WISC', 'HESO', 'HESC',
      'WIDC', 'WIDO', 'WEDC', 'WEDO',
      'HIDO', 'HIDO', 'HEDC', 'HEDO'
    ];

    for(let i=0; i<16; i++){
      if(TotalType[i]===type) setNum(i);
      break;
    }
  }

  const contents = [
    {
      'result': 'WESO',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'HESO',
      'BadRoomie': 'WIDC'
      
    },
    
    {
      'result': 'WESC',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'HESC',
      'BadRoomie': 'WIDO'
      
    },
    
    {
      'result': 'HISO',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'WISO',
      'BadRoomie': 'HEDC'
      
    },

    {
      'result': 'HISC',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'WISC',
      'BadRoomie': 'HEDO'
      
    },

    {
      'result': 'WISO',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'HISO',
      'BadRoomie': 'WEDC'
      
    },

    {
      'result': '양장피',
      'sub': '순한 모습 뒤 톡 쏘는 매운 맛을 가진',
      'img': '',
      'desc': '당신은 낯을 가리지만, 알고 보면 주목받고 싶은 잠재적 슈퍼스타에요. 책임감이 높아, 공동체에서 자신의 일을 잘 수행하고 부지런해요. 모르는 사람 눈엔 당신이 모범생처럼 보이지만 사실 놀 땐 노는 화끈한 사람이에요. 마치 순한 모습 뒤 화끈한 매력을 가진, 양장피처럼요!',
      'GoodRoomie': 'HISC',
      'BadRoomie': 'WEDO'
      
    },

    {
      'result': '김밥',
      'sub': '익숙한 맛이지만 여러 재료가 어울릴 때 맛있는',
      'img': '',
      'desc': '당신은 집에서 휴식하는 걸 좋아하지만 그렇다고 혼자 있는 시간만을 추구하는 사람은 아니에요. 혼자 방을 쓰는 것보다 여럿이서 함께 복작복작 재밌게 사는 것을 선호해요. 마치 집밥 같은 따뜻한 느낌을 주지만 여러 재료가 어울릴 때 가장 맛있는, 김밥처럼요!',
      'GoodRoomie': 'WESO',
      'BadRoomie': 'HIDC'
      
    },

    {
      'result': '쌀밥',
      'sub': '기본 중에 기본',
      'img': '',
      'desc': '당신은 규칙을 잘 지키고 일찍 자는 모범생이에요. 주변 어른들에게 인기가 많고 친구들과도 잘 어울리는 사람이에요. 당신은 모범생의 정석, 기본 중의 기본, 쌀밥 같은 사람이에요',
      'GoodRoomie': 'WESC',
      'BadRoomie': 'HIDO'
      
    },

    {
      'result': 'WIDC',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'HIDC',
      'BadRoomie': 'WESO'
      
    },

    {
      'result': 'WIDO',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'HIDO',
      'BadRoomie': 'WESC'
      
    },

    {
      'result': 'WEDC',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'HEDC',
      'BadRoomie': 'WISO'
      
    },

    {
      'result': 'WEDO',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'HEDO',
      'BadRoomie': 'WISC'
      
    },

    {
      'result': 'HIDC',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'WIDC',
      'BadRoomie': 'HESO'
      
    },

    {
      'result': 'HIDO',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'WIDO',
      'BadRoomie': 'HESC'
      
    },

    {
      'result': 'HEDC',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'WEDC',
      'BadRoomie': 'HISO'
      
    },

    {
      'result': 'HEDO',
      'sub': '',
      'img': '',
      'desc': '',
      'GoodRoomie': 'WEDO',
      'BadRoomie': 'HISC'
      
    }
  ]

  


      return (
        <>
          {resultType({score})}
          <GlobalStyle/>
            <Title>당신은 {contents[num].result}</Title>
            <Title color='black' fontSize='2rem'>간단한 설명</Title>
                <img
                img src={dorm}
                width={700}
                height={500}
                />
            <Desc>자세한 설명</Desc>
            <Desc>잘 맞는 타입: {contents[num].GoodRoomie}</Desc>
            <Desc>안 맞는 타입: {contents[num].BadRoomie}</Desc>
        </>
    
      );
}

export default Result;