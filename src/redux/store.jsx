// 引入 createStore 专门用于创建redux中最为核心的 store 对象
import { createStore } from 'redux'
//  引入为 Count组件服务的 reducer
import countReducer from './count_reducer'
const store = createStore(countReducer)
export default store