import React, { Component } from 'react'

export class ClassLifecycle extends Component {
    constructor(){
        // This is the 1st method of mounting phase which initialize the variable and state
        super()
        this.state={count:0,color:"blue"}
    }
    static getDerivedStateFromProps(props,state){
        // This is the second method of mounting phase and it returns state value from the props data
        // This method is also the 1st method of updating phase which everytime updates the state value
        // with the props data after every state or props updation
        console.log(props,state);
        return{color:props.color}
        
    }

    componentDidMount(){
        // This is the last method of mounting phase
        // It executes once after the initial render of the component
        // This method used for the side effects like data fetching and asynchronous operations
        console.log("this is componentDidMount");
        
    }

    shouldComponentUpdate(){
        // This is the 2nd method of updation phase which defines the component will re-render or not 
        // It returns boolean value the default return type is true
        console.log("This is shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevstate){
      // This method is used to get the values of previous props and state data
      // using those we can perform any operation in the component
      // This method should be used along with componentDidUpdate() method

      console.log("This is getSnapshotBeforeUpdate()");
      // console.log(prevProps,prevstate);
      return null
    }

    componentDidUpdate(prevProps,prevstate,snapshot){
      // to perform any side effects for the component after updation of state or props data
      // This method is the last method of updation phase,it executes after component re-render
      console.log("This is componentDidUpdate()");
      // console.log(prevProps,prevstate,snapshot);
      
       
    }

    componentWillUnmount(){
      // this method executes when the component is going to be remove from the DOM
      // this is used for the clean-up functionality of the state or props values of the component
      console.log("this is componentWillUnmount()");
      
    }

  render() {
    // This is the third method of mounting method executes after the derived method
    // the 3rd method of updation phase after shouldComponentUpdate() method
    console.log("this is render()");
    
    return (
      <div className=''>
        <h1 style={{color:this.state.color}}>Class Life Cycle Methods</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
        <h2>{this.props.color}</h2>
        <button onClick={()=>this.setState({color:"blue"})}>Change Color</button>

      </div>
    )
  }
}

export default ClassLifecycle