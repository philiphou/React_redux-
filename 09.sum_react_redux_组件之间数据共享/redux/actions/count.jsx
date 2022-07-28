/*
1. 该文件专门为count组件生成action对象
*/
// function createPlusAction(data){
//     return {type:'plus',data}
// }
// function createMinusAction(data){
//     return {type:'minus',data}
// }
import {PLUS,MINUS} from '../constant'

// 所谓同步action，就是指action的值是一般对象；
export const createPlusAction=(data)=>({type:PLUS,data})
export const createMinusAction=(data)=>({type:MINUS,data})
//  所谓的异步action就是指 action的值为函数，异步action中一般都会调用同步action,
export const createPlusAsyncAction=(data,time)=>{
        return (dispatch)=>{
        setTimeout(()=>{dispatch(createPlusAction(data))},time)
       } 
      
}