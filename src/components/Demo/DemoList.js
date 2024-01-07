import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items ,buttonType} = props;

  const sortedList = useMemo(() => {
    if(buttonType==='change to descending order'){
      return items.sort((a, b) => a - b);
    }else if(buttonType==='change to ascending order'){
      return items.sort((a, b) => b-a);
    }
  }, [items,buttonType]); 

  
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
