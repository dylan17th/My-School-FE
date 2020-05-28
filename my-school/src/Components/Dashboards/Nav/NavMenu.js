import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/core";

const NavMenu = ({ user }) => {
  return (
    <Menu>

      <MenuButton as={Button} bg="lightblue" color="black">
        <Avatar size="sm" src={user.profile_picture} alt="user avatar" />
      </MenuButton>

      <MenuList>
        <MenuItem>
          {/*  THIS IS THE USERS IMAGE AND NAME */}
          <Avatar size="sm" src={user.profile_picture} alt="user avatar" />{user.name}
        </MenuItem>

        {/* THIS IS THE SETTINGS BUTTON THAT REDIRECTS THE ACTIVITYCONTAINER TO SETTINGS COMPONENT */}
        <MenuItem as={Button} location='/settings'>Account Settings</MenuItem>

        <MenuGroup>
          <MenuItem>
            {/*  THIS WILL BE THE FAMILY NAME */}
            Family #{user.family_id}
          </MenuItem>

          <MenuItem>
            {/* THIS IS A CHILD ITEM --- MAP FOR ALL CHILDREN OF FAMIY ID */}
            <Avatar size="sm" src={user.profile_picture} alt="user avatar" />
            JimBob
            <Button>Manage</Button>
          </MenuItem>

          <MenuItem>
           {/* THIS IS THE BUTTON TO ADD ANOTHER CHILD TO THE FAMILY LIST */}
          </MenuItem>
        </MenuGroup>

        {/* THIS IS THE LOG OUT BUTTON */}
        <MenuItem ><Button  rightIcon='arrow-forward'>Log Out</Button></MenuItem>
        
      </MenuList>

    </Menu>
  );
};

export default NavMenu;
