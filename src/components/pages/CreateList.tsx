import { memo, VFC } from "react";
import { Container, Box } from "@chakra-ui/react";
import { AddList } from "../organisms/menuTable/AddList";

import { ItemCheck } from "../atoms/checkbox/ItemCheck";

export const CreateList: VFC = memo(() => {
  return (
    <Container>
      <Box p={4}>
        <AddList title="買い物リスト" />
      </Box>
      <ItemCheck />
    </Container>
  );
});
