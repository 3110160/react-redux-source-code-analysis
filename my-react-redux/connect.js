// connect 函数是一个高阶函数，接受一个组件并返回一个增强后的组件
// 其实现了动态获取 store 里面的数据，和dispatch action 改变state
// 从而实现了将子组件和store进行连接 
import HocConnect from './warpComponent'

const connect = (mapStateToProps,mapDispatchToProps)=>{
  // 在此处组合 新的 props 传给 高级组件使用
  const options = {

  }
  // 返回一个 高阶 HocConnect 组件
  return HocConnect(options);
}

/**
 * 使用时
 * @example
 * 
 * function fn(dispatch) {
 *  dispatch({
 *    type:'ADD'
 *  })
 * }
 * const mapStateToProps = (state)=>({
 *   count:state.count,
 *    name:state.name
 * })
 * const mapDispatchToProps = (dispatch)=>({
 *    getName:()=>fn(dispatch)
 * })
 * connect(mapStateToProps,mapDispatchToProps)(YourComponent)
 */