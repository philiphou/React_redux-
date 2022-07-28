// 引入 createStore 专门用于创建redux中最为核心的 store 对象

import { configureStore } from '@reduxjs/toolkit'
//  引入为 Count组件服务的 reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//  合并reducers
import { combineReducers } from '@reduxjs/toolkit'

const allReducers=combineReducers({
    count:countReducer,
    persons:personReducer
})
const store = configureStore({reducer:allReducers})
export default store