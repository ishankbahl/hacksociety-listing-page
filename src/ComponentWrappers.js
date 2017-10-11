import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

export const MuiThemeProviderWrapper = InputComponent => () => (
  <MuiThemeProvider theme={ theme } >
    <InputComponent />
  </MuiThemeProvider>
);

const WrappedComponent = InputComponent =>
  MuiThemeProviderWrapper(InputComponent);

export default WrappedComponent;