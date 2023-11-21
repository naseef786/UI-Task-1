import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Body from '../components/Body'
import Notification from '../features/notification'

const Home = () => {
  return (
    <>
     
        <Header/>
      
        <Notification/>
  
 
     
        <SideBar/>
 
     
        <Body/>
        
    </>
  )
}

export default Home