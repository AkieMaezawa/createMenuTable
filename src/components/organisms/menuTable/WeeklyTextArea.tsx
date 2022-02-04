import { memo, VFC } from "react";
import { Box, Text, Tooltip } from "@chakra-ui/react";

import { TextAreaBLD } from "../../atoms/textArea/TextAreaBLD";

export const WeeklyTextArea: VFC = memo(() => {
  return (
    <Box>
      <Text fontSize="lg" color="red.400" fontWeight="bold">
        MENU
      </Text>
      <br />
      <TextAreaBLD />
      <br />
      <Tooltip label="URL、レシピメモを入力" placement="bottom-start">
        <Text fontSize="lg" color="red.400" fontWeight="bold">
          レシピ
        </Text>
      </Tooltip>
      <br />
      <TextAreaBLD />
    </Box>
  );
});
