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

                            
          