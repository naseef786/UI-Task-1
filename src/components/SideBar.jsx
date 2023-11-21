
import Icon from '@mdi/react';
import { mdiViewDashboard } from '@mdi/js'


import React, { useState } from 'react';


const SideBar = () => {
  // const [showSidebar, setShowSidebar] = useState(true);

  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };
  // ${showSidebar ? 'show-sidebar' : 'hide-sidebar'}

  return (
    <div className="sidebar-section">
      {/* <div className="sidebar-toggle" onClick={toggleSidebar}>
        {showSidebar ? 'Hide' : 'Show'} Sidebar
      </div> */}
      
      <div className="sidebar-option-list">
        <div className="sidebar-profile-box">
          kdfnkjd 
        </div>
        <div className='sidebar-option'>
          <Icon path={mdiViewDashboard} size={1} style={{ color: "#0949A1" }} />
          <p>DashBoard</p>
        </div>
        <div className='sidebar-option'>
          <Icon path={mdiViewDashboard} size={1} style={{ color: "#0949A1" }} />
          <p>Perks</p>
        </div>
        <div className='sidebar-option'>
          <Icon path={mdiViewDashboard} size={1} style={{ color: "#0949A1" }} />
          <p>Addons</p>
        </div>
        <div className='sidebar-option'>
          <Icon path={mdiViewDashboard} size={1} style={{ color: "#0949A1" }} />
          <p>FAQ</p>
        </div>
        <div className='sidebar-option'>
          <Icon path={mdiViewDashboard} size={1} style={{ color: "#0949A1" }} />
          <p>Support</p>
        </div>
      
 

      </div>
           
      <div className='logout'>
        <button>logout</button>
      </div>
     
    </div>
  );
};

export default SideBar;
