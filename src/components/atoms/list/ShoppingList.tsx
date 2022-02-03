import { memo, VFC } from "react";

import { Item } from "../../../types/Item";
import ShoppingItem from "../list/ShoppingItem";
import classes from "../../../css/AddList.module.scss";
import { Flex } from "@chakra-ui/react";

type Props = {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const ShoppingList: VFC<Props> = memo(({ items, setItems }) => {
  const handleDone = (item: Item) => {
    setItems((prev) =>
      prev.map((t) => (t.id === item.id ? { ...item, done: !item.done } : t))
    );
  };

  const handleDelete = (item: Item) => {
    setItems((prev) => prev.filter((t) => t.id !== item.id));
  };

  return (
    <Flex>
      {items.length <= 0 ? (
        "登録されたTODOはありません。"
      ) : (
        <ul className={classes.shopping_list}>
          {items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
        </ul>
      )}
    </Flex>
  );
});

export default ShoppingList;
