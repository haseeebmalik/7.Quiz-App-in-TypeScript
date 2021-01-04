import React, { useState } from "react";
import { questionPropsType } from "./../Types/quiz_types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  questionform: {},
  radio: {
    verticalAlign: "middle",
    marginTop: "9px",
    display: "block",
  },
  button: {
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    alignItems: "center",
    color: theme.palette.text.secondary,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
}));

const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,
  callback,
  currentStep,
  showResult,
  score,
}) => {
  const classes = useStyles();
  let [selectedAns, setSelectedAns] = useState("");

  const handleSelection = (ev: any) => {
    setSelectedAns(ev.target.value);
  };

  if (showResult) {
    return (
      <div className="question-container result-container">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper1}>
              <h1>Result</h1>

              <h3 className={score >= 3 ? classes.green : classes.red}>
                You final score is ={score}/5
              </h3>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <div className="question-container">
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2} elevation={3}>
            <h3 className={classes.button}>{`Question ${
              currentStep + 1
            } of 5`}</h3>
            <br />
            <br />
            <br />
            <div className="question">
              <h4>{question}</h4>
            </div>

            <form
              onSubmit={(e: React.FormEvent<EventTarget>) =>
                callback(e, selectedAns)
              }
            >
              {options.map((opt: string, ind: number) => {
                return (
                  <div key={ind}>
                    <label className={classes.radio}>
                      <input
                        type="radio"
                        name="opt"
                        required
                        value={opt}
                        checked={selectedAns === opt}
                        onChange={handleSelection}
                      />

                      {opt}
                    </label>
                  </div>
                );
              })}
              <br />
              <br />
              <div className={classes.button}>
                <Button type="submit" variant="outlined" color="primary">
                  Next
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default QuestionCard;
