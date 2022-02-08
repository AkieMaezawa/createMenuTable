import { VFC, memo } from "react";
import {
  CheckboxGroup,
  Stack,
  Checkbox,
  Box,
  Text,
  Button,
  useCheckboxGroup
} from "@chakra-ui/react";

import { CheckItem } from "../../../types/CheckItem";

const items: CheckItem[] = [
  {
    id: "1",
    item: "飲み物は足りてる？"
  },
  {
    id: "2",
    item: "調味料は足りてる？"
  },
  {
    id: "3",
    item: "日用品は足りてる？"
  }
];

export const ItemCheck: VFC = memo(() => {
  const { value, getCheckboxProps } = useCheckboxGroup();
  const allChecked = () => {
    let checked: boolean = true;
    if (items.length === value.length) {
      checked = false;
    }
    return checked;
  };
  const all: boolean = allChecked();
  return (
    <>
      <Box
        p={4}
        border="1px"
        borderColor="#d7d2cd"
        borderRadius="10px"
        bg="white"
        shadow="md"
        bgColor="yellow.100"
      >
        <Text fontSize="lg" color="red.400" fontWeight="bold" pb={4}>
          ★買い物リスト確認項目
        </Text>
        <CheckboxGroup colorScheme="green">
          <Stack spacing={4} direction="column">
            {items.map((item) => (
              <Checkbox
                key={item.id}
                value={item.id}
                {...getCheckboxProps({ value: item.id })}
              >
                {item.item}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box p={4}>
        <Button colorScheme="blue" boxShadow="lg" isDisabled={all}>
          買い物リスト反映
        </Button>
      </Box>
    </>
  );
});
