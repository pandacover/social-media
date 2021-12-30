import { CardContent, Card, CardMedia, Typography, CardActions, Button } from '@mui/material';
import styles from "./Cards.module.css";

const Cards  = ({ content }) =>
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.dailymail.co.uk/i/pix/scaled/2015/03/09/0C07226D00000578-0-image-a-23_1425939890281.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {content.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content.message}
        </Typography>
        <Typography>
          {content.createdAt};
        </Typography>
        <Typography>
          {content.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

export default Cards;