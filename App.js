import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Product from './components/Product/Product'
import Employee from './components/Product/Employee'


class App extends Component{
  state = {
    employees:[
      {eno:'101', ename:'Allen Yang', salary:'25000'},
      {eno:'102', ename:'Maria Kary', salary:'27000'},
      {eno:'103', ename:'Kate Parry', salary:'28000'},
      {eno:'104', ename:'Bob Nil', salary:'29,000'},
      {eno:'105', ename:'Jhon Wills', salary:'24,000'},
      
    ]
  }
  deleteProductHandler(eindex){
    let memps = this.state.employees;
    memps.splice(eindex,1);
    this.setState({employees:memps});
   // this.state.eemployees=memps;
    console.log("Employee deleted"+eindex);
    

   }
   render(){
     return(<div>{
         this.state.employees.map((emp,eindex)=>{
           return<Employee eno={emp.eno} ename={emp.ename} salary={emp.salary} 
           click={()=>this.deleteProductHandler(eindex)} key={emp.ename}/>
         })
       }
       </div>
       )
   } 
}

/*
class App extends Component{
    
  state  = {
    products: [
      {pname:'Banana', price:'30'},
      {pname:'Orange',price:'40'},
      {pname:'Mango',price:'40'}
    ]
  }
  render(){
    return(<div>{
        this.state.products.map((prod)=>{
          return<Product pname={prod.pname}
                         price={prod.price}/>
        }
        )
        }
       </div>
   
    )
  }

}
*/

/*
function App() {
  return (
    <div> 
    <Product pname="Apple" price= "30"/>
    <Product pname="Orange" price = "60"/>
    </div>
  );
}
*/
export default App;
