import React from 'react';
import UseState from './component/usestate';
import UseEffect from './component/useeffect';
import Parent from './props/child';
import Children from './card/children';
import Styling from './loginform/form';
function App() {
 

  return (
    <>
  <UseState></UseState> 
  <UseEffect></UseEffect>
  <Parent></Parent>
  <Children></Children>
  <Styling></Styling>
    </>
  );
}

export default App;
