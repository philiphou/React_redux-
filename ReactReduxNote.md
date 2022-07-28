#  学习 Redux 和 React_redux 
1. redux 是什么？
    - redux 是专门用于做状态管理的JS库 （不是 react 插件库）
    - 它可以在react,angular,vue等项目中使用，但基本是与react配合使用
    - 作用： 集中管理react应用中，多个组件共享的状态
2. 什么情况下使用redux?
    - 某个组件的状态，需要让其他组件可以随时拿到（共享）
    - 一个组件需要改变另一个组件的状态（通信）
    - 总体原则： 能不用就不用，如果不用比较吃力才考虑使用
3. redux 工作流程：
                        components
                            || getState()
       actionCreator--------Store----------Reducers

4.  求合案例 redux精简版
    - 去除组件中需要共享的状态数据 count
    - 在 .src目录下建立： redux 文件夹，包含： count_reudcer.js 和 store.js 两个子文件
    - store.js
        1) 引入 redux中的 createStore 函数，创建一个store
        2) .createStore调用时候引号传入一个为其服务的reducer
        3) 记得暴露store对象
    - count_reducer.js
        1) reducer本质是一个函数，接收; preState,action 两个参数，返回加工后的转态
        2) reducer 有两个作用: 初始化状态 加工状态
        3) reducer 第一次被调用时候，是store自动触发的
            传递的preState是 undefined, action 是{type:'@@REDUX/INIT_a.s.jd.6'}
    - 在 index.js 中检测 store中的状态变化，一旦改变，重新渲染<App/>
       备注: redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写
5. 求和案例 redux完整版
    - count_action.js 专门用于创建 action对象
    - constant.js 放置由于编码疏忽写错的 action中的 type值
6. action 如果是个一般对象，则为同步action， 如果是一个函数，则为异步action
    - 明确： 延迟的动作不想交给组件，想要交个action
    - 核实需要异步action: 想要对状态进行操作，但是具体的数据靠异步任务返回（非必须）
    - 具体编码：
        -- npm i redux-thunk
        -- 创建action的函数： 不在返回一个对象，而是返回函数，该函数中包含异步任务
        -- 异步任务结束后，分发一个同步的action去真正操作数据
    - 备注： 异步action 不是必须的，完全可以自己等待异步任务，然后去分发action
7. react-redux:
    - 所有的UI组件都应该包含一个容器组件，它们是父子关系
    - 容器组件是真正和redux打交道的，里面可以随意使用redux的api
    - UI 组件中不能使用任何redux的API
    - 备注： 容器给UI 传递： 状态，操作状态的方法，均通过 props传递
8. 求和案例 react-redux版总结：
    - 明确两个概念：
        -- UI组件：不能使用任何 redux 的 api， 只负责页面的呈现和交互
        -- 容器组件： 负责和 redux通信，将结果交给UI组件；
    - 如何创建一个容器组件：依靠 react-redux里的 connect 函数
        connect(mapStateToProps,mapDispatchToProps)(UI组件)
        -- mapStateToProps 是映射状态，返回值是一个对象
        -- mapDispatchToProps 是映射状态的操作方法，返回值是一个对象
        -- 优化写法: 
        export default connect(state=>({count:state}),
                                {   plus:createPlusAction,
                                    minus:createMinusAction,
                                    plusAsync:createPlusAsyncAction
                                })(CountUI)


    - 备注： 容器组件中的store是靠props传递进去的，而不是在容器组件中直接引入 
    - react-redux 的容器组件可以自动监听store里的状态变化从而重新渲染,就不用再手动 store.subscribe(()=>{}) 监听了
9. 求和案例 react-redux 优化总结：
    - 容器组件和UI组件混成一个文件
    - 无需自己给容器组件传递store,给<App/> 包裹一个外壳组件 <Provider store={store}></Provider>
    - 使用了 react-redux 就不用再自己监听redux中的状态改变，容器组件可以完成这个动作
    - mapDispatchToProps 也可以写成一个对象
    - 一个组件要和redux打交道，需要：
        -- 定义好UI组件，但是不暴露
        -- 引入 connect函数，生成一个容器组件，并暴露： 
            connect(state=>{key:value},{key:xxxAction})(UI组件)
        -- 在UI组件中通过 this.props.xxxx读取和操作状态；
10. 组件之间数据共享案例：
    - 定义一个person组件，和count组件通过redux共享数据
    - 为person组件编写： reducer,action, 配置constant常量
    - 重点： Person 的reducer 和 Count的 reducer 需要使用 combineReducers进行合并
             合并后的总状态是一个对象！
    - 交给store的是总的reducers， 最后注意在组件中读取状态时候，记得“取到位”。