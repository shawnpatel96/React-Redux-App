import axios from "axios"


export const FETCH_DATA ="FETCH_DATA"
export const FETCH_SUCCESS="FETCH_SUCCESS"
export const FETCH_FAIL="FETCH_FAIL"

export const fetchData= () =>dispatch=>{
  dispatch({type:FETCH_DATA});
  axios
    .get("https://cat-fact.herokuapp.com/facts/random")
    .then(res=>{
      console.log(res)
      dispatch({type:FETCH_SUCCESS, payload: res.data})
    })
    .catch(error=>{
      console.log("no data", error)
      dispatch({type:FETCH_FAIL, payload:error.response})
    })
}


