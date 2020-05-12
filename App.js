import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './components/Todo'
import Post from './components/Post'
import Album from './components/Album'


class App extends Component{
  state={
    todos:[],posts:[],albums:[],
    shflag:1
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      console.log(res.data);
      this.setState({todos:res.data})
    })
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      console.log(res.data);
      this.setState({posts:res.data})
    })
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then((res)=>{
      console.log(res.data);
      this.setState({albums:res.data})
    })
  }
  showTodoHandler=()=>{
    this.setState({shflag:1});  
    console.log(this.state.shflag);
  }

  showPostHandler=()=>{
    this.setState({shflag:2});  
    console.log(this.state.shflag);
  }
  showAlbumHandler=()=>{
    this.setState({shflag:3});  
    console.log(this.state.shflag);
  }

  
  render(){
    let cd=null;
   if(this.state.shflag===1)
   {  cd=(<div>
       {
        this.state.todos.map((todo,eindex)=>{
          return<Todo id={todo.id} uid={todo.uid} title={todo.title} status={todo.state}
          key={todo.id}/>
        })
      }
     </div>)
  }else if(this.state.shflag===2)
  {
    cd=(<div>
      {
       this.state.posts.map((pst,eindex)=>{
         return<Post id={pst.id} uid={pst.uid} title={pst.title} body={pst.body}
         key={pst.id}/>
       })
     }
    </div>)
  }else if(this.state.shflag===3)
  {
    cd=(<div>
      {
       this.state.albums.map((albm,eindex)=>{
         return<Album id={albm.id} uid={albm.uid} title={albm.title} 
         key={albm.id}/>
       })
     }
    </div>)
  }
    return(<div>
         <hr></hr>
         <button onClick={this.showTodoHandler}> Show Todo </button> &nbsp;&nbsp;&nbsp;
         <button onClick={this.showAlbumHandler}> Show Album </button> &nbsp;&nbsp;&nbsp;
         <button onClick={this.showPostHandler}> Show Post </button> &nbsp;&nbsp;&nbsp;
         {cd}
         </div>
      )
  } 
  /*render(){
    return (
      <div className="App">
      {
         this.state.todos.map(td=>{
         return(
          <div>
            <h1>id:{td.id}</h1>
            <h2>title:{td.title}</h2>
          </div>
         )
        })
      }
      </div>
    )
  }*/
}

export default App;
