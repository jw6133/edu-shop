import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme,Switch, ThemeOptions,Paper, makeStyles, Theme, createStyles } from '@material-ui/core'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Header from './components/Header';
import Products from './pages/Products';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: "100vh",
    },
  })
);

function App() {
  const classes = useStyles();
  const [isDark, setIsDark] = useState(false);
  const [themeOption, setThemeOption] = useState<ThemeOptions>({
    palette: {
      type: 'light',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
    setThemeOption((prev)=>({
      ...prev,
      palette:{
        type: event.target.checked? 'dark' : 'light',
      },
    }));
  };

  const theme = createMuiTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Header>
      {/* <Paper className={classes.paper}></Paper> */}
      <Products/>
    </ThemeProvider>
  );
}

export default App;

