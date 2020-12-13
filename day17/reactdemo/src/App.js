//引入要渲染的组件
import Home from './components/home'
//引入footer
import Footer from './components/footer'
//创建一个组件
//创建组件的方式 函数创建 类的创建
function App(){
    return (<div>
        <h1>我是主组件，React脚手架好好用</h1>
        <Home/>
        <Footer></Footer>
        {/* <Home></Home> */}
        {/* <Home></Home>
        <Home></Home>
        <Home></Home> */}
    </div>)
}

export default App