export const ButtonsStyles = {
  variants: {
    callToAction: {
      bg: "blue.400",
      color: "white",
      borderRadius: "7px",
      boxShadow: "lg",
      _hover: {
        transform: "scale(1.05)",
        shadow: "0px 0px 20px #000",
      },
      fontSize: "15px",
      w: "180px",
      h: "30px",
    },
    selected: {
      bg: "green.400",
      color: "white",
      borderRadius: "7px",
      boxShadow: "lg",
      _hover: {
        transform: "scale(1.05)",
        shadow: "0px 0px 20px #000",
      },
      fontSize: "15px",
      w: "180px",
      h: "30px",
    },
    notSelected: {
      color: "black",
      borderRadius: "7px",
      boxShadow: "lg",
      _hover: {
        transform: "scale(1.05)",
        shadow: "0px 0px 20px #000",
      },
      fontSize: "15px",
      w: "180px",
      h: "30px",
    },
    swap: {
      bg: "teal.300",
      color: "white",
      borderRadius: "7px",
      boxShadow: "lg",
      _hover: {
        transform: "scale(1.05)",
        shadow: "0px 0px 10px #000",
        bg: "teal.500",
      },
    },
  },
};
