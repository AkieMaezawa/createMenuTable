import { memo, ReactNode, VFC } from "react";
import { Box, Textarea, Center, Button } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  setButton?: boolean;
};

export const TextAreaBLD: VFC<Props> = memo((props) => {
  const { children, setButton = false } = props;
  const onClickUpdate = () => alert();

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
      <Center>
        <Button
          bg="teal.400"
          color="white"
          width="100%"
          margin={2}
          _hover={{ opacity: 0.8 }}
          onClick={onClickUpdate}
          display={setButton ? "block" : "none"}
        >
          材料
        </Button>
      </Center>
    </Box>
  );
});
