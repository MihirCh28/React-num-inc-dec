import React, { useState } from 'react';


const App = () => {

  const [num, setNum] = useState(0);


  const increm = () => {
    setNum((prev) => {
      return(prev + 1);
    });
  };
  
  const decrem = () => {
      if(num > 0){
        setNum(num - 1);
      }else {
      setNum(0);
      alert('Limit has been Reached');
      }
    };

  return(
    <>
      <div className = 'main_div'>
        <div className = 'center_div'>
          <h1> Present Number = {num} </h1>
          <br/>
          <div className = 'btn_div'>
          <button onClick = {increm}> Increment </button>
          <button onClick = {decrem}> Decrement </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
