import React from 'react';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
      <h2 className="topic-heading">60.5k</h2>
      <h2 className="topic">Article Views</h2>
    </div>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png" alt="Views" />
  </div>
  <div className="box box2">
    <div className="text">
      <h2 className="topic-heading">150</h2>
      <h2 className="topic">Likes</h2>
    </div>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png" alt="likes" />
  </div>
  <div className="box box3">
    <div className="text">
      <h2 className="topic-heading">320</h2>
      <h2 className="topic">Comments</h2>
    </div>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png" alt="comments" />
  </div>

</div>

  );
}
export default BasicCard