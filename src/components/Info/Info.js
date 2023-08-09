import React, {useState} from 'react';

import { Button, DialogTitle, Dialog, DialogContent } from '@material-ui/core';

const Info = () => {
	const [open, setOpen] = useState(false);
    const handleToggle = () => setState(open: !open);

    return (
      <>
        <Dialog open={open} onClose={handleToggle}>
          <DialogTitle>Game Rules</DialogTitle>
          <DialogContent>This is a Number Guessing Game with the following rules:
            <ol>
              <li>The machine picks a random number between 1 to 100 and keeps it hidden.</li>
              <li>You need to guess until you can find the hidden secret number.</li>
              <li>You will get feedback on how close or far your guess is in the form of the following keywords ("cold", "warm", "hot", "extremely hot").</li>
            </ol>
            Everything clear?
          </DialogContent>
          <Button onClick={handleToggle}>YES</Button>
        </Dialog>
        <Button fullWidth variant="contained" color="primary" onClick={handleToggle}>How to Play</Button>
      </>
    );
  }
}

export default Info;
