// import React from 'react';
import React, { useState, useEffect } from 'react';
// import { QueryClient, QueryClientProvider } from "react-query";
import axios from 'axios';

// const queryClient = new QueryClient();

export default function Blogs () {
  const [list, setList] = useState([]);
  const baseUrl = 'http://127.0.0.1:5000/api';
  const url = `${baseUrl}/users/test?name=aaa`;
  const getList = async () => {
    await axios.get(url).then((res) => {
      let newList = [...list, ...res.data.data.list]; // list.push(list, res.data.data.list);
      setList(newList);
      console.log(list);
    });
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="blogs-contain">
      <p>blogs</p>
      <div>
        {list ? (
          list.map(function (value, key) {
            return <li key={key}>{value.name}</li>;
          })
        ) : (
          <p>no data</p>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            getList();
          }}
        >
          点击加载更多
        </button>
      </div>
    </div>
  );
}
