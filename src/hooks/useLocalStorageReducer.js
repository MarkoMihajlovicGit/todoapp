import { useReducer, useEffect } from 'react';

function UseLocalStorageReducer(key, defaultVal, reducer) {
  //make piece of state based off of value in local storage( or default )
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  //use useEffect to update local storage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, dispatch];
}

export default UseLocalStorageReducer;
