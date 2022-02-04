import { AddIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import React, { memo, useState, VFC } from "react";

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
  const handleSubmit = (event: any) => {
    setCount(count + 1);

    const newItem: Item = {
      id: count,
      title: inputTitle,
      done: false
    };

    setItems([newItem, ...items]);
    setInputTitle("");
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Flex pb={4}>
          <Input
            value={inputTitle}
            onChange={handleInputChange}
            align="center"
            width="100%"
          />
          <IconButton
            onClick={handleSubmit}
            align="center"
            aria-label="Add to item"
            icon={<AddIcon />}
          />
        </Flex>
      </form>
    </React.Fragment>
  );
});

export default ItemInput;
