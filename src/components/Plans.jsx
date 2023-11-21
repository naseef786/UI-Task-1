import React from 'react';
import Box from '@mui/material/Box';
import Icon from '@mdi/react';
import { mdiArrowExpandRight } from '@mdi/js';

import { mdiCloudArrowUpOutline } from '@mdi/js';

import { mdiAccountOutline } from '@mdi/js';


import { mdiEmailFast } from '@mdi/js';





// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const BasicCard=()=> {
  return (
    // <Card sx={{ minWidth: 275 }} className=''>
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
    
  <div className="box-container">
  <div className="box box1">
    <div className="text">
      <h2 className="topic-heading">Basic</h2>
      
      <span class="original-price">$50/mo</span>
  
  <span class="new-price">$40/mo</span>
    </div>
    <button className='card-button' style={{background:'#e2ed34'}}  >get Started <Icon path={mdiArrowExpandRight} size={1}/> </button>
    <div style={
      {  borderTop: '2px solid grey',width:'100%'}
    }>

      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}><Icon path={mdiAccountOutline} size={1} />upto 15 years </p>
      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> 
<Icon path={mdiCloudArrowUpOutline} size={1} />upto 25GB storage </p> 
     <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiEmailFast} size={1} />Email support</p>
 
    </div>
    <h6>
      Explore Features</h6>
  </div>
  <div className="box box2">
    <div className="text">
      <h2 className="topic-heading">Standard</h2>

      <span class="original-price">$50/mo</span>
  <span class="new-price">$40/mo</span>

    </div>
    <button className='card-button' style={{background:'rgb(237 71 57)'}}>get Started <Icon path={mdiArrowExpandRight} size={1} /> </button>
    <div style={
      {  borderTop: '2px solid grey',width:'100%'}
    }>

      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiAccountOutline} size={1} />upto 15 years </p>
      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> 
<Icon path={mdiCloudArrowUpOutline} size={1} />upto 25GB storage </p> 
     <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiEmailFast} size={1} /> Email support</p>
 
    </div>
    <h6>
      Explore Features</h6>
  </div>
  <div className="box box3">
    <div className="text">
      <h2 className="topic-heading">premium</h2>

      <span class="original-price">$50/mo</span>
      <span class="new-price">$40/mo</span>
    
    </div>
    <button className='card-button' style={{background:'#ee7bee'}}>get Started <Icon path={mdiArrowExpandRight} size={1} /> </button>
    <div style={
      {  borderTop: '2px solid grey',width:'100%'}
    }>

      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiAccountOutline} size={1} /> upto 15 years </p>
      <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> 
<Icon path={mdiCloudArrowUpOutline} size={1} />upto 25GB storage </p> 
     <p className="para" style={{display:'flex',alignItems:'center',justifyContent:'flex-start',justifyItems:'center'}}> <Icon path={mdiEmailFast} size={1} />Email support</p>
 
    </div>
    <h6>
      Explore Features</h6></div>
   

</div>

  );
}
export default BasicCard