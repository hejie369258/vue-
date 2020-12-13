//引入React
import React, { Component } from "react";
//一、直接调用React.Component
//import React from 'react'
//class Footer extends React.Component{
//二、按需引入 直接引入Component
// 利用类去创建组件
class Footer extends Component {
  name = "小王";
  constructor() {
    //生命周期之初始化
    super();
    this.otherName = "小鲁";
    console.log(this, "指向当前子类");
    this.state = {
      //类似于data:{}
      msg: "今天要周考",
    };
  }
  //生命周期函数之render()
  render() {
    return (
      <div>
        <h1>我是类创建的组件</h1>
        <h2>{this.name}</h2>
        <h2>{this.otherName}</h2>
        <h3>{this.state.msg}</h3>
      </div>
    );
  }
}

export default Footer;

/* 
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

必须用super() 去调用父类的属性和方法
*/
