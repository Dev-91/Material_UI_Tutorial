import './App.css';
import ha from "./Ha.gif"
import { Typography, Button, AppBar, CssBaseline, Toolbar, Grid, Container, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './Styles';

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              이거쉬 리액트
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    기능
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    없어요
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {card.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia} 
                    image={ha}
                    title="Image title">
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Exit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={"classes.footer"}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          왜 이미지가 안나오지...
        </Typography>
      </footer>
    </>
  );
}

export default App;
