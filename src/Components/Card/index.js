import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import slytherin from '../../helpers/images/slytherin.jpeg';
import hufflepuff from '../../helpers/images/hufflepuff.jpg';
import ravenclaw from '../../helpers/images/ravenclaw.jpg';
import gryffindor from '../../helpers/images/gryffindor.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 300,
    width: 300,
  },
});

export default function MediaCard({
  inputName,
  randomHouse,
  expelStudent,
  id,
}) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} m-3`}>
      <CardActionArea>
        {randomHouse === 'slytherin' && (
          <CardMedia
            className={classes.media}
            image={slytherin}
            title='Contemplative Reptile'
          />
        )}
        {randomHouse === 'ravenclaw' && (
          <CardMedia
            className={classes.media}
            image={ravenclaw}
            title='Contemplative Reptile'
          />
        )}
        {randomHouse === 'hufflepuff' && (
          <CardMedia
            className={classes.media}
            image={hufflepuff}
            title='Contemplative Reptile'
          />
        )}
        {randomHouse === 'gryffindor' && (
          <CardMedia
            className={classes.media}
            image={gryffindor}
            title='Contemplative Reptile'
          />
        )}
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {inputName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary' onClick={() => {
          expelStudent(id);
        }}>
          Expel
        </Button>
      </CardActions>
    </Card>
  );
}
