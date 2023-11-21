import React, { useState } from 'react'
import BasicCard from './Plans'
import OtherCard from './OtherPlans'
import Notification from '../features/notification'
import AddAnything from '../features/AddAnything'
const Body = () => {

  const [isMonthly, setIsMonthly] = useState(true);

  const handleClick = () => {
    setIsMonthly(!isMonthly);
  };
  return (

    <div className='main-body-container'>
      <div >
      <div className="body-container">
        <div className="header-part-body">
          <h1 className='head-body'>Choose a plan that's right for you !</h1>
          <div className="swith-button">
            <button className="toggle-button" onClick={handleClick}>
              <span className={`option ${isMonthly ? 'selected' : ''}`}>Monthly</span>
              <span className={`option ${!isMonthly ? 'selected' : ''}`}>Annually

                <span className="annual-offset">-10%</span>

              </span>
            </button>
          </div>
        </div>
      
          <BasicCard />
       

        
        <div className='other-card'>
          <OtherCard />
      
        </div>
        {/* <div className='card-body'>
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>

        </div> */}
       </div>
<Notification/>
<AddAnything/>
<div>lkdskmflm</div>
       </div>



    </div>
  )
}

export default Body