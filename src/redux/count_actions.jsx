/*
1. 该文件专门为count组件生成action对象
*/
// function createPlusAction(data){
//     return {type:'plus',data}
// }
// function createMinusAction(data){
//     return {type:'minus',data}
// }
import {PLUS,MINUS} from './constant'
export const createPlusAction=(data)=>({type:PLUS,data})
export const createMinusAction=(data)=>({type:MINUS,data})