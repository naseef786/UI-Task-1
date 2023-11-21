
import { mdiFaceAgent } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import { mdiFrequentlyAskedQuestions } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiViewDashboard } from '@mdi/js'
import { mdiSproutOutline } from '@mdi/js';
import React, { useState } from 'react';
import { mdiPuzzleOutline } from '@mdi/js';
import { mdiMenuOpen } from '@mdi/js';
import Logo from '../assets/Logo.png'

const SideBar = ({isSidebarOpen}) => {
  

  return (
    <>
    {/* <button className="toggle-btn" onClick={toggleSidebar}>
    <Icon className='toggle-btn ' path={mdiMenuOpen} size={2} />
      </button> */}
      <div className={`sidebar-section ${isSidebarOpen ? 'open' : ''}`}>
  
      <div className="sidebar-option-list">
        <div className="sidebar-profile-box">
<div>
<img className='' src={Logo} alt="" style={{height:'80px' ,width:'50px'}} />
</div>
         <div >
         <h5>
            muhammad Naseef
          </h5>

         </div>
         <div>
         <h6>
            nas@gmail.com
          </h6>
         </div>
          
        </div>
        <div className='sidebar-option'>
          <Icon path={mdiViewDashboard} size={1} style={{ color: "#0949A1" }} />
          <p>DashBoard</p>
        </div>
        <div className='sidebar-option' style={{ color: "#0949A1" }} >


          <Icon path={mdiSproutOutline} size={1} style={{ color: "#0949A1" }} />
          <p>Perks</p>
        </div>
        <div className='sidebar-option'>


          <Icon path={mdiPuzzleOutline} size={1} style={{ color: "#0949A1" }} />
          <p>Addons</p>
        </div>
        <div className='sidebar-option'>


          <Icon path={mdiFrequentlyAskedQuestions} size={1} style={{ color: "#0949A1" }} />
          <p>FAQ</p>
        </div>
        <div className='sidebar-option'>
          <Icon path={mdiFaceAgent} size={1} style={{ color: "#0949A1" }} />
          <p>Support</p>
        </div>



      </div>

      <div className='logout-container'>
        <button className='logout'>Logout


          <Icon path={mdiLogout} size={1} />
        </button>
      </div>

    </div>
    </>
  );
};

export default SideBar;
