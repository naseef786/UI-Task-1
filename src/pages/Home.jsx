import React, { useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Body from '../components/Body'
import Notification from '../features/notification'

const Home = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
           <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
           <Notification/>
      <SideBar isSidebarOpen={isSidebarOpen} />
     
        <Body/>
        
    </>
  )
}

export default Home