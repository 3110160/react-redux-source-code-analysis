// connect 函数是一个高阶函数，接受一个组件并返回一个增强后的组件
// 其实现了动态获取 store 里面的数据，和dispatch action 改变state
// 从而实现了将子组件和store进行连接 

const connect = ()=>{
  return HocConnect();
}