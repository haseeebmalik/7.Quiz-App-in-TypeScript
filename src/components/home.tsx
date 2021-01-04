import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { hello } from "./../Types/quiz_types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "blue",
    textAlign: "center",
  },
  H1: {
    elevation: 5,
    color: "white",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "blue",
    color: theme.palette.text.secondary,
  },
  button: {
    marginBottom: "400px",
    width: "400px",
  },
}));
const Home: React.FC<hello> = ({ A }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <h1 className={classes.H1}>Quiz App</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button
              className={classes.button}
              variant="contained"
              onClick={(e) => {
                A(true);
                e.preventDefault();
              }}
            >
              Start
            </Button>
          </Paper>
          <div></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
