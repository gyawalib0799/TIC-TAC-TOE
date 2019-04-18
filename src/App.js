import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        box:Array(9).fill(null),
        choosePlayer: "X",
        winner: null,
      };    
  }

  winnerCheck(){
    let winningPattern =[
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
      ["1","4","7"],
    ]
    for (let index=0; index<winningPattern.length; index++) {
      const[a,b,c]= winningPattern[index];
      if(this.state.box[a] && this.state.box[a]=== this.state.box[b] &&  this.state.box[a]=== this.state.box[c]){
        alert("You just won");
        this.setState({
          winner: this.state.choosePlayer,
        })
      }
    }
  }

 

  onClick(index){
    const newbox= this.state.box;
    if(this.state.box[index]=== null && !this.state.winner){
    newbox[index]=this.state.choosePlayer;
  
    console.log(this.state.choosePlayer);
    this.setState({
      box: newbox,
     // choosePlayer: this.state.choosePlayer==="X"? ("O"):("X"),  
     choosePlayer: this.state.choosePlayer,        
    }) 
    
    this.winnerCheck()
  }
    console.log(this.state.choosePlayer)
    if(this.state.choosePlayer === 'X') {
       setTimeout(()=> {
         do {
           var random = Math.floor(Math.random()*9);
         } while(this.state.box[random] !== null);
        var newbox1=this.state.box;
        newbox[random]="O"
        this.setState({
          box: newbox1,
         
        })
       }, 1000);
  } 
}
  

handleClick(){
  this.setState({
    box:Array(9).fill(null),
    choosePlayer: "X",
    winner: '',
    

  })
}


  render() {
   const Box= this.state.box.map((box, index)=>
   
   <div className="cell" 
   onClick={()=>this.onClick(index)}
   key={index}>{box}</div>)
    return (
      <div className="box" >
        <h3>TIC-TAC-TOE</h3>
        <div className="container">
        {Box}
        Winner:{this.state.winner}
        </div>
        <br />
        <br />
        <button className="Submit" onClick={(event)=>this.handleClick(event)}>Reset</button>
      </div>
      
    
    );
  }
}

export default App;
