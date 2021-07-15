// quiz 풀면 정답 -> 점수 획득
// 오답 -> 점수 없음.

// 상태 : 사용자의 현재 점수(score)\
// 액션 : 정답인지 아닌지 판별, 정답이면 점수 증가.

// 서브 리듀스 만드는 방법
// 액션 타입(문자열)
const CEHCK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";
// 액션 생성 함수

export function check({isCorrect}) {
    return {
        type : CEHCK_CORRECT,
        payload : {isCorrect}
    }

}
export function next()
{
    return {
        type:NEXT_PAGE
    }
}
export function reset()
{
    return {
        type :RESET
    }
}
// 초기 상태
const initialState = {
    score : 0,
    page:0, // 0 : 인트로 페이지 1 ~ n : 퀴즈 페이지, n+`:마지막 페이지
    quizs : [
        {
            q:"대한민국의 수도?",
            a: [
                {
                    text : "서울",
                    isCorrect : true,
                },
                {
                    text : "부산",
                    isCorrect : false,
                },
                {
                    text : "인천",
                    isCorrect : false,
                },
            ]   
        },
        {
            q:"대한민국의 123수도?",
            a: [
                {
                    text : "서울",
                    isCorrect : true,
                },
                {
                    text : "부산",
                    isCorrect : false,
                },
                {
                    text : "인천",
                    isCorrect : false,
                },
            ]   
        }
    ]   
}

export default function score (state= initialState,action)
{
    switch(action.type)
    {
        case CEHCK_CORRECT:
            return {
                ...state,
                score: action.payload.isCorrect
                ? state.score + 10
                : state.score,
            };
        case NEXT_PAGE:
            return {
                ...state,
                page : state.page+1
            }
        case RESET :
            return {
                ...state,
                score : 0,
                page : 0
            }
        default:
            return state;
    }
}