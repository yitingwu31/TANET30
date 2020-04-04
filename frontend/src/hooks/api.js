import { useReducer } from 'react';

const initialState = ({
  status: NaN,
  resopnse: null,
  errMsg: null,
  loading: false,
  success: false,
  error: false,
  isInit: function() {
    return !this.loading && !this.success && !this.error;
  }
})

const reducer = (state, action) => {
  switch(action.type) {
    case 'CONNECT':
      return {...state, loading: true};
    case 'SUCCESS':
      return ({
        ...state,
        status: action.status || 200,
        response: action.response,
        errMsg: null,
        loading: false,
        success: true,
        error: false
      });
    case 'ERROR':
      return ({
        ...state,
        status: action.status || 400,
        response: null,
        errMsg: action.errMsg || "",
        loading: false,
        success: false,
        error: true
      });
    default:
      throw new Error("Invalid Action Type");
  }
}

export default (url, responseType, onSuccess) => {
  const [conn, dispatch] = useReducer(reducer, initialState);

  const connect = async (method, body, headers) => {
    dispatch({type: "CONNECT"});
    fetch(url, { method, body, headers })
    .then(res => {
      if(res.status !== 200){
        res.text()
        .then(errMsg => {
          dispatch({
            type: "ERROR",
            status: res.status,
            errMsg
          })
        })
      }
      else {
        let thenable = null;
        switch(responseType) {
          case 'json':
            thenable = res.json()
            break;
          case 'text':
            thenable = res.text()
            break;
          default:
            return dispatch({type: "SUCCESS"});
        }
        if(thenable === null) return;
        thenable.then(data => {
          dispatch({
            type: "SUCCESS",
            response: data
          })
          if(onSuccess) onSuccess();
        })
        .catch((err) => {
          console.error(err);
          dispatch({
            type: "ERROR",
            errMsg: "Response type Error"
          })
        })
      }
    })
    .catch(err => {
      console.error(err);
      dispatch({
        type: "ERROR",
        errMsg: "Connection Error"
      })
    })
  }

  return [conn, connect];
}