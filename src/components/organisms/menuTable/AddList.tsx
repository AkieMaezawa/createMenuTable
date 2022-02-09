import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";

import { Item } from "../../../types/Item";
import ItemInput from "../../atoms/input/ItemInput";
import EditList from "../../atoms/list/EditList";

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

type Props = {
  title: string;
};

export const AddList: VFC<Props> = memo((props) => {
  const [items, setItems] = useState(initialState);
  const { title } = props;

  return (
    <Box>
      <Text fontSize="lg" color="red.400" fontWeight="bold">
        {title}
      </Text>
      <br />
      <ItemInput setItems={setItems} items={items} />

      <Text fontSize="md" pb={4}>
        <InfoOutlineIcon mr={2} mb={1} />
        購入不要なものはチェックをつける
      </Text>
      <EditList setItems={setItems} items={items} />
    </Box>
  );
});
