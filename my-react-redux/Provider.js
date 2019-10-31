//  Provider 是一个 react 组建 将 store 放在 context 上，方便后面 connect 组件使用
import React from 'react'
import {ReduxStoreContext} from './createContext'


class Provider extends React.Component{
  shouldComponentUpdate(nextProps,nextState){
    const currentStorejsonstr = JSON.stringify(this.props.store);
    const nextStorejsonstr = JSON.stringify(nextProps.store);
    if(currentStorejsonstr === nextStorejsonstr){
      return false;
    }
  }
  render(){
    // 返回一个 Context.Provider 组件
    const {store,children} = this.props;
    return <ReduxStoreContext.Provider value={store}>{children}</ReduxStoreContext.Provider>
  }
}

export default Provider;

// 使用时
/**
 * 
 * @example
 *   <Provider store={store}>
 *      <YOUCOMPONENT/>
 *    </Provider>
 * 
 * 
 */