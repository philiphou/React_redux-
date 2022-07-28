import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

const root = createRoot(document.getElementById('root'))
root.render(
  // 此处需要用<Provider> 包裹App, 目的是让APP 所有的后代容器组件都可以接收到 store
  <Provider store={store}>
    <App/>
  </Provider>

)


