import React,{Component} from 'react';
import DisplayCounter from  '../components/DisplayCounter/DisplayCounter'
import ChangeCounter from '../components/ChangeCounter/ChangeCounter'
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';

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
               <hr></hr>
               <button onClick={()=>this.props.onAddSquare(this.props.ctr)}>Square and Store</button>
               <ul>
                   {
                       this.props.storedResults.map((sqr,index)=>
                        (<li key={index}onClick={()=>this.props.onDeleteSquare(index)}>{sqr}</li>)
                        )
                   }
               </ul>
            </div>
        )
    }

}
const mapStateToProps = state=>{
    return{
        ctr:state.ctr.counter, 
        storedResults:state.msqr.results
        }

}
const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter:()=>dispatch({type:actionTypes.INCR }),
        onDecrementCounter:()=>dispatch({type:actionTypes.DECR }),
        onAddCounter:()=>dispatch({type:actionTypes.ADD, value:5}),
        onSubCounter:()=>dispatch({type:actionTypes.SUB, value:5}),
        onAddSquare:(counter)=>dispatch({type:actionTypes.ADD_SQUARE,value:counter}),
        onDeleteSquare:(i)=>dispatch({type:actionTypes.DELETE_SQUARE,value:i})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MainPage);
