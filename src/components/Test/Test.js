import React, {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import index from '../../styles/index.css';
import progress from './progress.css';
import Parser from 'html-react-parser';
import {darken, lighten} from 'polished';
import Result from '../../Page/Result';
import quiz from '../../contents/quiz';

const GlobalStyle = createGlobalStyle`
  body{
    padding: 50px;
    background-color: #7561FF;
    text-align: center;
  }
`

const Box = styled.div`
  background: white;
  width: 800px;
  height: 830px;
  border-radius: 20px;
  padding: 1px;
  margin: auto;
`

const Title = styled.h1`
  font-family: "jua";
  text-align: center;
  color: black;
  font-size: ${props => props.fontSize || '2.8rem'};
  font-weight: 300;
`;

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

const Progress = ({page}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${page}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}/>
		</div>
	)
}


function Test(){
  

  const [page, setPage] = useState(0);
  const [resultScore, setResultScore] = useState([]);
  const [num, setNum] = useState(0);

  const pageUp = (score)=>() => {

    setResultScore([...resultScore, score]);

    if (page===9){
      let score1=resultScore[0]*0.7 + resultScore[1]*0.3;
      let score2 = resultScore[2]*0.5 + resultScore[3]*0.3+resultScore[4]*0.2;
      let score3 = resultScore[5]*0.6 + resultScore[6]*0.2+resultScore[7]*0.2;
      let score4 = resultScore[8]*0.6 + resultScore[9]*0.4;

      let type = ''
      let TotalType = [
        'WESO', 'WESC', 'HISO', 'HISC',
        'WISO', 'WISC', 'HESO', 'HESC',
        'WIDC', 'WIDO', 'WEDC', 'WEDO',
        'HIDO', 'HIDO', 'HEDC', 'HEDO'
      ];

      if (score1 >= 5) {
        type = type + 'W';
      } else {
        type = type + 'H';
      }

      if (score2 >= 5) {
          type = type + 'E';
      } else {
          type = type + 'I';
      }

      if (score3 >= 5) {
          type = type + 'S';
      } else {
          type = type + 'D';
      }

      if (score4 >= 5) {
          type = type + 'O';
      } else {
          type = type + 'C';
      }
      console.log(type);

      for(let i=0; i<16; i++){
        if(TotalType[i]===type){
        setNum(i);
        break;
        }
      }
      

    }

    setPage(page+1);
  }

    while(page<10){
      return (
        <>
          <GlobalStyle/>
            <Box>
            <Progress page={(page+1)*10}/>
            <Title fontSize={quiz[page].fontSize}>{Parser(quiz[page].question)}</Title>
                <img
                    src={quiz[page].src}
                    width={quiz[page].width}
                    height={quiz[page].height}
                />
       
            {quiz[page].answers.map((answer, i) => (
                <Button
                    key={'answer-' + i}
                    onClick={pageUp(answer.score)}
                >
                  {answer.text}
                </Button>
            ))}
            </Box>

        </>
      );
    }
  
  return(
    <>
      <Result num={num}></Result>
    </>
  );
    

}


export default Test;