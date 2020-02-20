import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL} from "../actions/actions"

const initialState={
    fact: null,
    isFetchingData: false,
    error: ""
}

export const reducer =(state=initialState, action)=>{
    console.log("from the reducer",state)
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetchingData: true,
                
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                fact: action.payload,
                isFetchingData:false,
                error:""
            }
        case FETCH_FAIL:
            return{
                ...state,
                error: action.payload,
                isFetchingData:false
            }
        default:
            return state;
    }
}