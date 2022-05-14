import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Cards = ({imgUrl, title, desc, disable, apply}) => {

  return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="280"
            image={imgUrl}
            style={{ objectFit: "contain", backgroundColor : '#3c3f45',}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button disabled={disable} size="small">{apply}</Button>
          </CardActions>
        </Card>
      )
    }


export default Cards