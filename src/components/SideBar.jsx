import React from 'react'
import Icon from '@mdi/react';
import { mdiViewDashboard } from '@mdi/js';

const SideBar = () => {
  return (
    <div className='sidebar-section'>
      <div className="sidebar-option-list">
        <div className="sidebar-profile-box"></div>
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
    </div>
  )
}

export default SideBar