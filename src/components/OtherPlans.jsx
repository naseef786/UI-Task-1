import React from 'react';

import Box from '@mui/material/Box';
import Icon from '@mdi/react';
import { mdiArrowExpandRight } from '@mdi/js';

import { mdiCloudArrowUpOutline } from '@mdi/js';

import { mdiAccountOutline } from '@mdi/js';


import { mdiEmailFast } from '@mdi/js';



const OtherCard=()=> {
  return (
    // <Card sx={{ minWidth: 440 ,maxHeight:200}}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       Word of the Day
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       be{bull}nev{bull}o{bull}lent
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       adjective
    //     </Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
        
  <div className="boxi-container">
  <div className="boxi box1">
    <div className="text">
    <button className='card-button' style={{background:'rgb(237 71 57)'}}>get Started  </button>
      <h2 className="topic-heading">Basic</h2>
      <h2 className="topic">Article Views</h2>
      <span class="original-price">$50/mo</span>
  
  <span class="new-price">$40/mo</span>
  <button className='card-button' >get Started <Icon path={mdiArrowExpandRight} size={1} /> </button>
    </div>
  
    <div >

      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}><Icon path={mdiAccountOutline} size={1} />upto 15 years </p>
      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> 
<Icon path={mdiCloudArrowUpOutline} size={1} />upto 25GB storage </p> 
     <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiEmailFast} size={1} />Email support</p>
 
    </div>
   
  </div>
  <div className="boxi box2">
    <div className="boxi-text"> <button className='card-button' style={{background:'rgb(72 224 34)  '}}>get Started  </button>
      <h2 className="boxi-topic-heading">Standard</h2>
      <h2 className="topic">Likes</h2>
      <span class="original-price">$50/mo</span>
  <span class="new-price">$40/mo</span>
  <button className='card-button' style={{background:'orange'}}>get Started <Icon path={mdiArrowExpandRight} size={1} /> </button>
    </div>
  
    <div>

      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiAccountOutline} size={1} />upto 15 years </p>
      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> 
<Icon path={mdiCloudArrowUpOutline} size={1} />upto 25GB storage </p> 
     <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiEmailFast} size={1} /> Email support</p>
 
    </div>
  
  </div>

   

</div>
  );
}
export default OtherCard