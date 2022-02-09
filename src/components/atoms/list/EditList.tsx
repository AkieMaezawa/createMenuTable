import { memo, VFC } from "react";

import { Item } from "../../../types/Item";
import ShoppingItem from "../list/ShoppingItem";
import { Box, List } from "@chakra-ui/react";

type Props = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const EditList: VFC<Props> = memo(({ items, setItems }) => {
  const handleDone = (item: Item) => {
    setItems((prev) =>
      prev.map((t) => (t.id === item.id ? { ...item, done: !item.done } : t))
    );
  };

  const handleDelete = (item: Item) => {
    setItems((prev) => prev.filter((t) => t.id !== item.id));
  };

  return (
    <Box>
      {items.length <= 0 ? (
        "登録された材料はありません。"
      ) : (
        <List spacing={3}>
          {items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
        </List>
      )}
    </Box>
  );
});

export default EditList;
