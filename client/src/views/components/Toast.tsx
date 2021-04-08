import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert, { Color } from '@material-ui/lab/Alert';

type Props = {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: Color;
};

const Toast: React.FC<Props> = ({ open, onClose, message, severity }) => (
  <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} onClose={onClose}>
    <Alert onClose={onClose} severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);

export default Toast;
