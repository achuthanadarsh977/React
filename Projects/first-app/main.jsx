import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// function Age(){
//   let x = 17;
//   let y = ""

//   if(x>=18){
//     y = "Eligible to vote"
//   }

//   else{
//     y = "Not eligible to vote"
//   }


//   return (
//       <h1>{y}</h1>
//   )

// }


function Garage(){
  return(
    <h1>Who lives in my garage?</h1>
  )
}

function Car(){
   const myfunc = () => {
    alert("Hello everyone")
   }

   <Garage/>
   return(
     <button onClick={myfunc}>Click me!</button>
   )

}

// function Truck(){
//     const trunk = () => {
//       alert("Trunk")
//     }

//     return(
//       <button onlick = {trunk}>Truck</button>
//     )
// }


createRoot(document.getElementById('root')).render(
  <Car/>
)
