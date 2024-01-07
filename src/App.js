import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [buttonChange,setButtonChange]=useState('change to descending order');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');   
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);    

  const buttonData=()=>{
    setButtonChange((prevData)=>{
      if(prevData==='change to descending order'){
          return 'change to ascending order'
      }else if(prevData==='change to ascending order'){
        return 'change to descending order'
      }
    })
  };
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} buttonType={buttonChange} />
      <Button onClick={buttonData}>{buttonChange}</Button>
    </div>
  );
}

export default App;
