import React from 'react'
import Card from './Components/Card'
import Button from './Components/Button'


const App = () => {
  const user = ["Sarthak", "Harsh", "Anubhav"]

  return (<div className='App-Card'>
    
     {user.map(function(elem){
      return <Card user ={elem}/>
     })}
  </div>)

}

export default App;