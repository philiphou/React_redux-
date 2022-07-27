/* 
- reducer 本质是一个函数，接收参数，然后处理事情，然后返回结果
- reducer 函数会接收到两个参数，一个是之前的状态： preState，一个是 action 动作对象
*/
   //  初始化时候
const initState=0

export default function countReducer (preState=initState,action){
    //  从action 对象中获取 type 和 data
    const {type,data}=action
    //  根据 type 决定如何加工数据：
    switch(type){
        case 'plus': 
            console.log(preState)
            return preState+data;
         
        case 'minus':
            return preState-data
        default:
            return preState
    }

}