import { extendTheme } from "@chakra-ui/react";
import { ButtonsStyles as Button } from "./buttonStyles";
import { useColorModeValue } from "@chakra-ui/react";

const components = { Button };
const styles = {
    global: (props) => ({
      body: {
        bg: useColorModeValue('#EAF8FF', '#EAF8FF')
      }
    })
  }
const values = { components, styles };

export const theme = extendTheme(values);