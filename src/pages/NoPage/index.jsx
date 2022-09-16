// import React from 'react';
import React, { useState, useRef, useEffect } from 'react';

export default function Nopage () {
  // 在这里做一个倒计时demo，开始 暂停，继续，重置，结束
  // 1、定义一个倒计时时间
  const [count, setCount] = useState(10);
  const [intervalid, setIntervalId] = useState(null);
  const [paused, setPaused] = useState(false);
  const savedCallback = useRef();

  function callback () {
    if (paused) {
      return;
    }
    if (count <= 1) {
      clearInterval(intervalid);
    }
    setCount(count - 1);
  }
  const reset = () => {
    setCount(100);

    setPaused(false);
    // setOver(false);
  };

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick () {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="layout-contain">
      <p>Layout</p>
      <div>
        <p>{count}</p>
        <div>
          <button onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button onClick={() => reset()}>Restart</button>
        </div>
      </div>
    </div>
  );
}
