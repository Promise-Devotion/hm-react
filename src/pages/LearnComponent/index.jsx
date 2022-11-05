import React from "react";

export default function LearnComponent() {
  return (
    <div>
      <h3>组件学习</h3>
      <div>
        <h4>受控组件与非受控组件</h4>
        <div>
          一、受控组件
          <br />
          受控组件，简单来讲，就是受我们控制的组件，组件的状态全程响应外部数据
          <br />
          举个简单的例子：
          <br />
          this.state = username: 'lindaidai' ;<br />
          return input name="username" value=this.state.username
        </div>
        <div>
          二、非受控组件
          <br />
          非受控组件，简单来讲，就是不受我们控制的组件
          <br />
          一般情况是在初始化的时候接受外部数据，然后自己在内部存储其自身状态
          <br />
          当需要时，可以使用ref 查询 DOM并查找其当前值，如下：
          <br />
        </div>
      </div>
      <h3>state 和 props 有什么区别？</h3>
      <div>
        一、state
        <br />
        一个组件的显示形态可以由数据状态和外部参数所决定，而数据状态就是
        state，一般在 constructor 中初始化
      </div>
      <div>
        二、props
        <br />
        React 的核心思想就是组件化思想，页面会被切分成一些独立的、可复用的组件
        <br />
        组件从概念上看就是一个函数，可以接受一个参数作为输入值，这个参数就是
        <br />
        props，所以可以把 props 理解为从外部传入组件内部的数据 react
        <br />
        具有单向数据流的特性，所以他的主要作用是从父组件向子组件中传递数据 props
        <br />
        除了可以传字符串，数字，还可以传递对象，数组甚至是回调函数，如下：
        <br />
        return &lt;h1 Hello this.props.name &lt;h1;
        <br />
        const element = " " Welcome name="Sara" onNameChanged= this.handleName ;
      </div>
    </div>
  );
}
