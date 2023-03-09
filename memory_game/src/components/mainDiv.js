// import './App.css';
import { useState} from 'react';
import CreateDiv from './createDiv';





function MainDiv(){
  
  let [win,setWin] = useState(true)
  let rows =[];
  for(let i=0;i<16;i++){
      rows.push(i);
  }
  let count =0;


  let inc = ()=>{
    count+=1
    console.log(count);
  }

  let redBoxes_count = 0;
  let tot = 0
  let redBox = ()=>{
    redBoxes_count+=1;
    // console.log(redBoxes_count);

  }

     return (
      <>     
        {win ? 
       <div className='main' style={{
        display:'grid',
        // flexDirection:'row'
        gridTemplateColumns:'3fr 3fr 3fr 3fr',
  
      }}>
          {
            rows.map(elem=>{
              // console.log(colored);
               let  number = Math.floor(Math.random()*10)%2;
                let count =0;

              if(number){
                redBox();
              }
           return  <CreateDiv key ={elem} ke={elem}   number={number} count={count} setWin={setWin} win={win} inc={inc} rd_count={redBoxes_count}/>   
          })
          }

      </div>
      : <div style={{
        // textAlign:"center",
        height:"350px",
        backgroundColor:"orange"


      }}><h1 style={{position:"relative",
      top:"140px",textAlign:"center" }}> you loose the game </h1>
      <h3 style={{position:"relative",
      top:"140px",textAlign:"center" }}><a href='/'> play again</a></h3>
      </div>}
      </>

    )
  }
  


  export default MainDiv;