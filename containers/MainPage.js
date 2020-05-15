import React,{Component} from 'react';
import DisplayCounter from  '../components/DisplayCounter/DisplayCounter'
import ChangeCounter from '../components/ChangeCounter/ChangeCounter'

class MainPage extends Component{
    state={
        counter:0
    }
    changeCounterHandler(action,value){
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

    }
    render(){
        return(
            <div>
               <DisplayCounter value={this.state.counter}/>
               <ChangeCounter click={()=>this.changeCounterHandler('inc')} caption="Increment"/>
               <ChangeCounter click={()=>this.changeCounterHandler('dec')}caption="Decrement"/>
               <ChangeCounter click={()=>this.changeCounterHandler('add',5)} caption="ADD 5"/>
               <ChangeCounter click={()=>this.changeCounterHandler('sub',5)}caption="SUB 5"/> 
            </div>
        )
    }

}
export default MainPage;
