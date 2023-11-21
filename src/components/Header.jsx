import React from 'react'
import Logo from '../assets/Logo.png'
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
const Header = () => {
  return (
    <div className="navbar">
{/* <div>
  <h1 style={{color:'black',left:0,position:'relative'}}>ldsfmskldm</h1>
</div> */}
 <img  src={Logo} className="navbar-heading2"/>
 
 <div className="navbar-heading" >
  <div >
  <img src={Logo} alt="df" style={{height:'30px',width:'30px', borderRadius:'50%'}} />
  <span style={{fontSize:'12px'}}>naseef@gmail.com</span>
  </div>


 </div>
 <div>
 <Icon path={mdiChevronDown} style={{background:'white',gap:'3px',display:'flex',alignItems:'center',justifyContent:'center',justifyItems:'center',padding:'5px'}} size={1} />
 </div>

</div>
  )
}

export default Header