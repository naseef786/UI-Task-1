import React, { useState } from 'react'
import BasicCard from './Plans'
import OtherCard from './OtherPlans'

const Body = () => {

  const [isMonthly, setIsMonthly] = useState(true);

  const handleClick = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div className='main-body-container'>
      <div className="body-container">
        <div className="header-part-body">
          <h1 className='head-body'>Choose a plan that's right for you !</h1>
          <div className="">
          <button className="toggle-button" onClick={handleClick}>
      <span className={`option ${isMonthly ? 'selected' : ''}`}>Monthly</span>
      <span className={`option ${!isMonthly ? 'selected' : ''}`}>Annually
      <div style={{flex:1, }}>
      <span className="annual-offset">-10%</span>
      </div>
     
      </span>
    </button>
          </div>
        </div>
        <div className='card-body'>
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>

        </div>
      <div className='other-card'>
        <OtherCard/>
        <OtherCard/>
      </div>
        {/* <div className='card-body'>
          <BasicCard/>
          <BasicCard/>
          <BasicCard/>

        </div> */}

       
      </div>
    

    </div>
  )
}

export default Body