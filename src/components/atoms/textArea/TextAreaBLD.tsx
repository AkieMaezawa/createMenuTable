import { memo, ReactNode, VFC } from "react";
import { Box, Textarea, Center } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export const TextAreaBLD: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Box>
      <Center bg="red.300" color="white" fontSize="xl">
        {children}
      </Center>
      <Textarea placeholder="Morning" size="sm" resize="vertical" />
      <Textarea
        placeholder="Lunch"
        size="sm"
        resize="vertical"
        backgroundColor="red.100"
      />
      <Textarea placeholder="Dinner" size="sm" resize="vertical" />
    </Box>
  );
});
