import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  displayType: string;
}

const GameCardContainer = ({ children, displayType }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" display={displayType}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
