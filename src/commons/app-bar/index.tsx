import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
  };
});

const InternalBar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Students App</Typography>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6">Enlaces</Typography>
        </div>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/students/list">
            <ListItemText primary="Lista de estudiantes" />
          </ListItem>
          <ListItem button component={RouterLink} to="/students/form">
            <ListItemText primary="Formulario de estudiantes" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default InternalBar;
