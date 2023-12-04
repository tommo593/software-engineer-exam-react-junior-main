import React, { useState } from 'react';

const New = ({ text }) => {
 const [spanLabel, setSpanLabel] = useState("hello");

  const handleClick = () => {
    setSpanLabel("world");
  };

  return <span onClick={handleClick}>{spanLabel}</span>;
};

export default New;