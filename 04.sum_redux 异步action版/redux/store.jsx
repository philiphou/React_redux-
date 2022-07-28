// 引入 createStore 专门用于创建redux中最为核心的 store 对象
import { createStore,applyMiddleware } from 'redux'
//  引入为 Count组件服务的 reducer
import countReducer from './count_reducer'
//  引入 redux thunk 用于支持异步action
import thunk from "redux-thunk"
const store = createStore(countReducer,applyMiddleware(thunk))
export default store