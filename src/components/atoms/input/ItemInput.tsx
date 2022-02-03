import { Button, Flex, Input } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";

import { Item } from "../../../types/Item";

type Props = {
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  items: Item[];
};

const ItemInput: VFC<Props> = memo(({ setItems, items }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [count, setCount] = useState<number>(items.length + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  const handleSubmit = () => {
    setCount(count + 1);

    const newItem: Item = {
      id: count,
      title: inputTitle,
      done: false
    };

    setItems([newItem, ...items]);
    setInputTitle("");
  };

  return (
    <Flex pb={4}>
      <Input
        value={inputTitle}
        onChange={handleInputChange}
        align="center"
        width="150px"
      />
      <Button onClick={handleSubmit} align="center">
        +
      </Button>
    </Flex>
  );
});

export default ItemInput;
