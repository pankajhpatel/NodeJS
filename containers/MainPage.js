import React,{Component} from 'react';
import DisplayCounter from  '../components/DisplayCounter/DisplayCounter'
import ChangeCounter from '../components/ChangeCounter/ChangeCounter'
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions';
import './ulstyle.css';

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
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button onClick={()=>this.props.onAddFactorial(this.props.ctr)}>Factorial and Store</button>
               <div className="ulsqrdiv">
               <ul className="ulsquare" >
                   {
                       this.props.storedResults.map((sqr,index)=>
                        (<li key={index}onClick={()=>this.props.onDeleteSquare(index)}>{sqr}</li>)
                        )
                   }
               </ul>
               </div>
               <div className="ulfactdiv">
               <ul className="ulfactorial">
                   {
                       this.props.storedFactResults.map((fact,index)=>
                        (<li key={index}onClick={()=>this.props.onDeleteFactorial(index)}>{fact}</li>)
                        )
                   }
               </ul>
               </div>
            </div>
        )
    }

}
const mapStateToProps = state=>{
    return{
        ctr:state.ctr.counter, 
        storedResults:state.msqr.results,
        storedFactResults:state.mfact.factresults
        }
}
const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter:()=>dispatch(actionCreators.increment()),
        onDecrementCounter:()=>dispatch(actionCreators.decrement()),
        onAddCounter:()=>dispatch(actionCreators.addition()),
        onSubCounter:()=>dispatch(actionCreators.subtraction()),
        onAddSquare:(counter)=>dispatch(actionCreators.addSquare(counter)),
        onDeleteSquare:(i)=>dispatch(actionCreators.deletesquare(i)),
        onAddFactorial:(counter)=>dispatch(actionCreators.addFactorial(counter)),
        onDeleteFactorial:(i)=>dispatch(actionCreators.deleteFactorial(i))
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MainPage);
