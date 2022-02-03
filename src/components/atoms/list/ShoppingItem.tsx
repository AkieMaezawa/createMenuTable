import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { Item } from "../../../types/Item";
import classes from "../../../css/AddList.module.scss";

type Props = {
  item: Item;
  handleDone: (item: Item) => void;
  handleDelete: (item: Item) => void;
};

const ShoppingItem: VFC<Props> = memo(({ item, handleDone, handleDelete }) => {
  return (
    <li>
      <label className={item.done ? classes.label_done : ""}>
        <input
          type="checkbox"
          className={classes.checkbox_input}
          onClick={() => handleDone(item)}
          defaultChecked={item.done}
        />
        <span className={classes.checkbox_label}>{item.title}</span>
      </label>

      <Button colorScheme="red" onClick={() => handleDelete(item)}>
        削除
      </Button>
    </li>
  );
});

export default ShoppingItem;
