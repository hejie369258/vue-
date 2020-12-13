let msg = "信息";
let flag = true;
function Home() {
  return (
    <div>
      <h1>欢迎管理首页</h1>
      <h2>{msg}</h2>
      <h3>{!flag ? "哈哈" : "呵呵"}</h3>
    </div>
  );
}

export default Home;
