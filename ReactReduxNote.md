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
4.                     
                            
          