import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../../assests/images/back.jpg';
import '../../pages/Services/Services.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    borderRadius:10,
  },
  media: {
    height: 500,
    // backgroundColor:"red"
  },
  content:{
    height:190,
    width:300,
    padding:25
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {name,step,image,Description} = props.data;
console.log(props.data);
  return (
    
    <Card className={classes.root} id="card">
      <CardActionArea>
        {/* <CardMedia className={classes.media} image={image} title="Contemplative Reptile" /> */}
        <CardContent className={classes.content}>
        <Typography gutterBottom variant="" component="h4">
            <b>{step}</b>
          </Typography>
          <Typography gutterBottom variant="" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    

  );
}