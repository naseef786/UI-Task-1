import React from 'react'
import profile from '../assets/profile.jpg'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import Logo from '../assets/Logo.png'
import { mdiMenuOpen } from '@mdi/js';

const Header = ({isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="navbar">
{/* <div>
  <h1 style={{color:'black',left:0,position:'relative'}}>ldsfmskldm</h1>
</div> */}
 <img  src={Logo} className="navbar-heading2"/>
 
 <div className="navbar-heading" >
  <div className='nav-options' >
  <img src={profile} alt="df" style={{height:'30px',width:'30px', borderRadius:'50%'}} />
  <span style={{fontSize:'12px'}}>naseef@gmail.com</span> 

  </div>


 </div>
 {isSidebarOpen &&  <button className="toggle-btn" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>}

 <div>
 <Icon path={mdiChevronDown} style={{background:'white',    marginRight: '70px',display:'flex',alignItems:'center',justifyContent:'center',justifyItems:'center',padding:'3px',borderRadius:'3px'}} size={1} />
 </div>

</div>
  )
}

export default Header