import React, { Component } from 'react';
import './index.scss';

export default class Footer extends Component {
  toogleChange = (event) => {
    console.log(event.target.checked);
    this.props.checkAll(event.target.checked);
  };
  clearAllDone = () => {
    this.props.clearAllDone();
  };
  render () {
    const { todos } = this.props;
    const doneCount = todos.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    );
    const count = todos.length;

    return (
      <div className="footer-contain">
        <label htmlFor="">
          <input
            type="checkbox"
            checked={doneCount === count}
            onChange={this.toogleChange}
          />
        </label>
        <span>
          已完成{doneCount}/总计{count}
        </span>
        <button onClick={this.clearAllDone}>清除全部已完成</button>
      </div>
    );
  }
}
