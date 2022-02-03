import { memo, VFC } from "react";
import { HStack, Box, Text, Tooltip } from "@chakra-ui/react";

import { TextAreaBLD } from "../atoms/textArea/TextAreaBLD";

export const WeeklyTextArea: VFC = memo(() => {
  return (
    <Box>
      <HStack spacing="2px" padding={3}>
        <Box width="2xl" pl={3}>
          <Text fontSize="lg" color="red.400" fontWeight="bold">
            MENU
          </Text>
        </Box>
        <TextAreaBLD>月</TextAreaBLD>
        <TextAreaBLD>火</TextAreaBLD>
        <TextAreaBLD>水</TextAreaBLD>
        <TextAreaBLD>木</TextAreaBLD>
        <TextAreaBLD>金</TextAreaBLD>
        <TextAreaBLD>土</TextAreaBLD>
        <TextAreaBLD>日</TextAreaBLD>
      </HStack>
      <HStack spacing="2px" padding={3}>
        <Box width="2xl" pl={3}>
          <Tooltip label="URL、レシピメモを入力" placement="bottom-start">
            <Text fontSize="lg" color="red.400" fontWeight="bold">
              レシピ
            </Text>
          </Tooltip>
        </Box>
        <TextAreaBLD />
        <TextAreaBLD />
        <TextAreaBLD />
        <TextAreaBLD />
        <TextAreaBLD />
        <TextAreaBLD />
        <TextAreaBLD />
      </HStack>
    </Box>
  );
});
