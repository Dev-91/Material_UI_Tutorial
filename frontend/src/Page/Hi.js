import { Typography, Button, AppBar, CssBaseline, Toolbar, Grid, Container, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
// import { BrowserRouter } from 'react-router-dom'

import useStyles from './Styles';

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function Hi() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Button color="primary">
          Hi
        </Button>
      </main>
    </>
  );
}

export default Hi;
