import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {

  const [num, setNum] = useState(0);


  const increm = () => {
    setNum((prev) => {
      return (prev + 1);
    });
  };

  const decrem = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert('Limit has been Reached');
    }
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1> Present Number = {num} </h1>
          <br />
          <div className='btn_div'>
            <Tooltip title="Add">
              <Button onClick={increm}> ➕ </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decrem}> ➖ </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

