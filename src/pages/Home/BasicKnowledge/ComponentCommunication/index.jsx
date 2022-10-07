import React from "react";
import { Outlet } from "react-router";

import communicationImg from "../../../../assets/img/react-tx.png";
import "./index.scss";

export default function ComponentCommunication(params) {
  return (
    <div className="component-communication">
      <div className="component-title">组件通信</div>
      <hr />
      <div className="img-contain">
        <img src={communicationImg} alt="" />
        {/* <a onClick={gotodemo}>点击查看案例 </a> */}
        <a href="/home/communication/communicationdemo" target="_blank">
          点击查看案例
        </a>
      </div>
      <div className="detal">
        <p>
          一、是什么 <br />
          我们将组件间通信可以拆分为两个词： 组件 <br />
          通信 <br />
          回顾Vue系列
          <br />
          (opens new
          window)的文章，组件是vue中最强大的功能之一，同样组件化是React的核心思想
          <br />
          相比vue，React的组件更加灵活和多样，按照不同的方式可以分成很多类型的组件
          <br />
          而通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的，广义上，任何信息的交通都是通信
          <br />
          组件间通信即指组件通过某种方式来传递信息以达到某个目的
        </p>
        <p>
          二、如何通信
          <br />
          组件传递的方式有很多种，根据传送者和接收者可以分为如下：
          <br />
          父组件向子组件传递 <br />
          子组件向父组件传递 <br />
          兄弟组件之间的通信 <br />
          父组件向后代组件传递 <br />
          非关系组件传递
        </p>
        <p>
          父组件向子组件传递
          由于React的数据流动为单向的，父组件向子组件传递是最常见的方式
          父组件在调用子组件的时候，只需要在子组件标签内传递参数，子组件通过props属性就能接收父组件传递过来的参数
        </p>
        <p>
          子组件向父组件传递
          子组件向父组件通信的基本思路是，父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值
          父组件对应代码如下：
        </p>
        <p>
          兄弟组件之间的通信
          如果是兄弟组件之间的传递，则父组件作为中间层来实现数据的互通，通过使用父组件传递
        </p>
        <p>
          父组件向后代组件传递
          父组件向后代组件传递数据是一件最普通的事情，就像全局数据一样
          使用context提供了组件之间通讯的一种方式，可以共享数据，其他数据都能读取对应的数据
          通过使用React.createContext创建一个context
        </p>
        <p>
          非关系组件传递
          如果组件之间关系类型比较复杂的情况，建议将数据进行一个全局资源管理，从而实现通信，例如redux。关于redux的使用后续再详细介绍
        </p>
        <p>
          三、总结
          <br />
          由于React是单向数据流，主要思想是组件不会改变接收的数据，只会监听数据的变化，当数据发生变化时它们会使用接收到的新值，而不是去修改已有的值
          因此，可以看到通信过程中，数据的存储位置都是存放在上级位置中
        </p>
      </div>
      <Outlet />
    </div>
  );
}
