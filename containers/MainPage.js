import React,{Component} from 'react';
import DisplayCounter from  '../components/DisplayCounter/DisplayCounter'
import ChangeCounter from '../components/ChangeCounter/ChangeCounter'
import {connect} from 'react-redux';

class MainPage extends Component{
    state={
        counter:104
    }
   /* changeCounterHandler(action,value){
        let cnt=this.state.counter;
        if(action==='inc'){
           cnt++;
        }
        if(action==='dec'){
            cnt--;
         }
         if(action==='add') {
            cnt=cnt+value;
        }
        if(action==='sub') {
            cnt=cnt-value;
        }
    
        this.setState({counter:cnt});

    }*/
    render(){
        return(
            <div>
               <DisplayCounter value={this.props.ctr}/>
               <ChangeCounter click={this.props.onIncrementCounter} caption="Increment"/>
               <ChangeCounter click={this.props.onDecrementCounter}caption="Decrement"/>
               <ChangeCounter click={this.props.onAddCounter} caption="ADD 5"/>
               <ChangeCounter click={this.props.onSubCounter}caption="SUB 5"/> 
            </div>
        )
    }

}
const mapStateToProps = state=>{
    return{
        ctr:state.counter
    }

}
const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter:()=>dispatch({type:'INC' }),
        onDecrementCounter:()=>dispatch({type:'DEC' }),
        onAddCounter:()=>dispatch({type:'ADD', value:5}),
        onSubCounter:()=>dispatch({type:'SUB', value:5})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MainPage);
