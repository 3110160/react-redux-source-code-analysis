// HocConnect 函数接受一个组件作为参数，并返回一个组件
import {ReduxStoreContext} from './createContext'

const HocConnect = (options,)=>{
  return (YourCompontent)=>{
    return (
      <ReduxStoreContext.Consumer>
        {
          context=>{
            return <YourCompontent {...options}/>
          }
        }
      </ReduxStoreContext.Consumer>
    )
  }
  
}

export default HocConnect;