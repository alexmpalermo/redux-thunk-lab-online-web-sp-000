export function fetchCats(){
  return dispatch => {
    dispatch({type:"LOADING_CATS"})
    console.log("after loading");
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(data => dispatch({type: "FETCH_CATS", payload: data.images}))
  }
}
