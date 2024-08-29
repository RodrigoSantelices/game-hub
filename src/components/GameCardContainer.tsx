import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  displayType: string;
}

const GameCardContainer = ({ children, displayType }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      display={displayType}
      _hover={{
        transform: "scale(1.025)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
