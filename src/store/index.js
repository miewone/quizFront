import { combineReducers } from "redux";
import score from "./modules/score";


export default combineReducers({
    // 서브 리듀서들을 넣으면됨.
    score
})