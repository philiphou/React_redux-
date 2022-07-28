import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPersonAction} from '../../redux/actions/person'
import {nanoid} from 'nanoid'



class Person extends Component {

    add=()=>{
        console.log(this.props)
        const name =this.nameNode.value
        const age =this.ageNode.value
        const obj={id:nanoid(),name,age}
        this.props.add(obj)
        
        this.nameNode.value=''
        this.ageNode.value=''

    }
  render() {
    return (
      <div>
        <h2>我是person组件</h2>
        <h4>上面组件的求和是：{this.props.count}</h4>
        <input type="text" ref={c=>this.nameNode=c} placeholder='enter name' />
        <input type="text" ref={c=>this.ageNode=c} placeholder='enter age' />
        <button onClick={this.add}>add</button>
        <ul>
          {
          this.props.persons.map(e=>{
            return(
              <li key={e.id}>name:{e.name}---- age:{e.age}</li>
            )
            })
              }
                             
        </ul>
      </div>
    )
  }
}
export default connect(state=>({count:state.count,persons:state.persons}),{add:addPersonAction})(Person)