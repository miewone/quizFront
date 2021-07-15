import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {PinkButton} from "./components/PinkButton";
import {next,reset} from "./store/modules/score";
import styled from "styled-components";
import Quiz from "./components/Quiz";
const Main = styled.main`
    width: 100%;
    max-width: 360px;
    margin: auto;
    text-align: center;
`;
const MainImg = styled.img`
    width:200px;
    margin-bottom : 30px;

`;
const SubHeader = styled.h2`
    font-size: 1.1em;
    color: #8a8e90;
    font-weight:400;
`;
const Header = styled.h1`
  &::before {
    content : "";
  };
  &::after {
    content : "";
  };
`;
function App() {
  const page = useSelector(state => state.score.page);
  const score = useSelector(state => state.score.score);
  const dispatch = useDispatch();
  const quizs = useSelector((state) => state.score.quizs)
  return (
    <>
      { page ===0 && (
        <Main>
          <MainImg src="/city/main.jpg"/>
          <SubHeader> 나라별 수도 퀴즈 </SubHeader>
          <h2> 수도 맞추기~</h2>
          <PinkButton text="start!" clickEvent={ () => {dispatch(next());}}/>
        </Main>
      )}
      { page > 0 && page <= quizs.length&& (
        <Main>
          <Quiz></Quiz>
        </Main>
      )}
      {
        quizs.length < page && (
          <Main>
            마지막 페이지
            <Header>점수는?</Header>
            <div className="score">{score}</div>
            <SubHeader></SubHeader>
            <PinkButton text="다시 테스트하기" clickEvent={() => {dispatch(reset());}} />
          </Main>
        )
      }
    </>
  );
}

export default App;
