import { Box, VStack } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";

import { Item } from "../../types/Item";
import ItemInput from "../atoms/input/ItemInput";
import ShoppingList from "../atoms/list/ShoppingList";

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
      <VStack spacing={2}>
        <ItemInput setItems={setItems} items={items} />
        <ShoppingList setItems={setItems} items={items} />
      </VStack>
    </Box>
  );
});
