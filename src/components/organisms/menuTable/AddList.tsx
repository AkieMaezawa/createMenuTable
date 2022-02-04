import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";

import { Item } from "../../../types/Item";
import ItemInput from "../../atoms/input/ItemInput";
import ShoppingList from "../../atoms/list/ShoppingList";

const initialState: Item[] = [
  {
    id: 2,
    title: "じゃがいも",
    done: false
  },
  {
    id: 1,
    title: "にんじん",
    done: true
  }
];

export const AddList: VFC = memo(() => {
  const [items, setItems] = useState(initialState);

  return (
    <Box>
      <Text fontSize="lg" color="red.400" fontWeight="bold">
        材料リスト
      </Text>
      <br />
      <ItemInput setItems={setItems} items={items} />

      <Text fontSize="md" pb={4}>
        <InfoOutlineIcon mr={2} mb={1} />
        購入不要なものはチェックをつける
      </Text>
      <ShoppingList setItems={setItems} items={items} />
    </Box>
  );
});
