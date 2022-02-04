import { Button, ListItem, Checkbox, Spacer, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { Item } from "../../../types/Item";

type Props = {
  item: Item;
  handleDone: (item: Item) => void;
  handleDelete: (item: Item) => void;
};

const ShoppingItem: VFC<Props> = memo(({ item, handleDone, handleDelete }) => {
  return (
    <ListItem>
      <Stack direction={["column", "row"]} spacing="24px">
        <Checkbox p="4" isChecked={item.done} onChange={() => handleDone(item)}>
          {item.title}
        </Checkbox>
        <Spacer />
        <Button colorScheme="red" onClick={() => handleDelete(item)}>
          削除
        </Button>
      </Stack>
    </ListItem>
  );
});

export default ShoppingItem;
