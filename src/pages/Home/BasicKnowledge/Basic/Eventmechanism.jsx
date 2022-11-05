export default function EventMechanism(params) {
  return (
    <div>
      <h2>事件机制</h2>
      <div>
        <h3>一、是什么</h3>
        <p>
          React基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等
          在React中这套事件机制被称之为合成事件
        </p>
        <h4>合成事件（SyntheticEvent）</h4>
        <p>
          合成事件是 React模拟原生
          DOM事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器 根据
          W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口，例如：
          const button = &lt;button
          onClick=&#123;handleClick&#125;&gt;按钮&lt;button&gt;
        </p>
        <p>
          如果想要获得原生DOM事件，可以通过e.nativeEvent属性获取
          <br />
          const handleClick = (e) =&gt; console.log(e.nativeEvent);
          <br />
          const button = &lt;button
          onClick=&#123;handleClick&#125;&gt;按钮&lt;/button&gt;
        </p>
      </div>
    </div>
  );
}
