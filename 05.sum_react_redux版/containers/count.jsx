/*
创建UI container 连接 count UI 组件和 redux

*/
// 引入 UI 组件
import CountUI from '../components/Count'

//  连接两者 UI 与 redux

import {connect} from 'react-redux'
// 引入actioncreators
import {createPlusAction,createMinusAction,createPlusAsyncAction} from '../redux/count_actions'

//  创建并暴露count的容器组件， 使用 connect()()
// a 函数的返回对象中的key就作为传递给UI组件的props的key, value 就作为传递给UI组件的props的value---状态; 其中store里的状态state已经作为参数传入给函数a

function mapStateToProps(state){
    return {count:state}

}
// b 函数的返回一个对象中的key就作为传递给UI组件的props的key, value 就作为传递给UI组件的props的value---操作状态的方法
function mapDispatchToProps(dispatch){
    return{
        plus:(data)=>{
            // 通知redux执行加法
        dispatch(createPlusAction(data))
        },
        minus:(data)=>{
            dispatch(createMinusAction(data))
        },
        plusAsync:(data,time)=>{
            dispatch(createPlusAsyncAction(data,time))
        }
       
       
    }
}
const CountContainer =connect( mapStateToProps,mapDispatchToProps)(CountUI)
export default CountContainer

