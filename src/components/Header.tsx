import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { ShoppingCart } from '@material-ui/icons';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useReactiveVar } from '@apollo/client';
import { cartItemsVar } from '../cache';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  const CartItems=useReactiveVar(cartItemsVar);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {children}
          <IconButton>
            <Badge badgeContent={CartItems.length} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
