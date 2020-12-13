//引入核心库
import React from "react";
//引入DOM库
import ReactDOM from "react-dom";
//引入主组件
import App from "./App";

//渲染
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* The tag <app> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter. 

React中组件名称首字母，必须大写
*/
