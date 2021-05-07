import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#2cd671',
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: '#2cd671',
        '&:hover': {
          backgroundColor: '#2cd671',
        },
      },
      current: {
        color: '#2cd671',
      },
    },
  },
});

const DatePickerThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>;
};

export default DatePickerThemeProvider;
