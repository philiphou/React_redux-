import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import store from './redux/store'
const root = createRoot(document.getElementById('root'))
root.render(<App/>)
//  用 store 监听变化，重新渲染app
store.subscribe(()=>{
  root.render(<App/>)
})
 


