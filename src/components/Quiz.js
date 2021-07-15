import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { BlueButton } from "./BludButton";
import {Progress} from "./Progress"
import { check,next } from "./../store/modules/score";

export default function Quiz() {
    const dispatch = useDispatch();
    const quiz = useSelector((state) => state.score.quizs);
    const page = useSelector((state)=>state.score.page);

    return (
        <>
            <h1>{quiz[page-1].q}</h1>
            {quiz[page-1].a.map(item => {
                return (
                    <BlueButton 
                        text={item.text} 
                        key={item.text} 
                        clickEvent={()=> {
                            // 정답 체크
                            dispatch(check({isCorrect : item.isCorrect}));
                            // 다음 페이지로 이동
                            dispatch(next());
                        }}>
                    </BlueButton>)
            })}
            <Progress page={page} maxPage={quiz.length}/>
        </>
    )
}