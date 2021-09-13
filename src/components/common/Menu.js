import React from 'react';
import { Link } from 'react-scroll'
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { red } from '@material-ui/core/colors';

const StyledMenu = withStyles({paper: {border: '1px solid #d3d4d5'}})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
    transformOrigin={{ vertical: 'top', horizontal: 'center', }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#020234a4",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
    '&:hover': {
      backgroundColor: "#06003da4",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Menus = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItem = props?.navMenu;

  return (
    <div>
      <span aria-controls="customized-menu" aria-haspopup="true" variant="contained" onClick={handleClick} >
          {navItem?.menu}
      </span>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
        {
          navItem?.sub_menu?.map(list=>
            <Link to={list?.ids} spy={true} smooth={true} onClick={handleClose} style={{ textDecoration: "none", color: "#534e4e" }}>
              <StyledMenuItem>
                <ListItemText primary={list.subMenu} />
              </StyledMenuItem>
            </Link>
          )
        }
      </StyledMenu>
    </div>
  );
}

export default Menus;