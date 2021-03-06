import React from "react";
import { Box, Flex } from "@chakra-ui/core";
import NavMenu from "./NavMenu";
import LeftNav from './LeftNav'


export default function TopNav() {

  return (
    <nav className="top-nav">
      <Box bg="blue.900" w="100%" >
        <Flex
          direction="row"
          align="center"
          justify="space-between"
        >
          <LeftNav />
          <Flex align="center">
            <NavMenu />
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
}
