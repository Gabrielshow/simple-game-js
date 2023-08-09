import React, {useState} from 'react';

import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core';
import { Form, Info, Progress } from './components';
import { getInitialState, getFeedback } from './util';

import './App.css';

const App = () => {
  const [state, setState] = useState(getInitialState());

  const resetGame = () => {
    setState(getInitialState());
  }
  updateAppState = (guess) => {
    const { actual } = state;

    const absDiff = Math.abs(guess - actual);
    const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

    setState(prevState => ({
      guess,
      allGuesses: [...prevState.allGuesses, { guess, feedbackColor }],
      attempt: prevState.attempt + 1,
      feedbackMessage,
      block: absDiff === 0,
    }));
  }

    const { allGuesses, feedbackMessage, block, attempt, show } = state;

    const guessList = allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))

    return (
      <Grid style={{ height: '100vh' }} justify="center" alignItems="center" container>
        <Grid item xs={3}>
          <Paper style={{ padding: '50px' }} elevation={6}>
            <Typography align="center" variant="h2" gutterBottom>HOT or COLD</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <div className={`feedback ${feedbackMessage[0].toLowerCase()}`}>
              <h2 className="feedback-text">{feedbackMessage}</h2>
            </div>
            <Form block={block} returnGuessToApp={value => updateAppState(value)} />
            <Progress feedbackMessage={feedbackMessage} attempt={attempt} guessList={guessList} />
            <Button style={{ marginBottom: '15px' }} fullWidth variant="contained" color="primary" onClick={resetGame}>Reset Game</Button>
            <Info show={show} onClose={handleClose} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
