
import CountUI from '../components/Count'



import {connect} from 'react-redux'

import {createPlusAction,createMinusAction,createPlusAsyncAction} from '../redux/count_actions'




export default connect(state=>({count:state})
,
// mapDispatchToProps 的函数写法（一般写法），可以优化为直接传入一个action对象
// dispatch=>(
//     {
//             plus:(data)=>{
//                  dispatch(createPlusAction(data))
//             },
//             minus:(data)=>{
//                 dispatch(createMinusAction(data))
//             },
//             plusAsync:(data,time)=>{
//                 dispatch(createPlusAsyncAction(data,time))
//             }
           
           
//         }
//     )
//mapDispatchToProps的精简写法：
 {
    plus:createPlusAction,
    minus:createMinusAction,
    plusAsync:createPlusAsyncAction
 }
    )(CountUI)


