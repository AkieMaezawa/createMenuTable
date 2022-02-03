import { memo, VFC } from "react";

import { WeeklyTextArea } from "../organisms/menuTable/WeeklyTextArea";
import { Container } from "@chakra-ui/react";

export const MenuTable: VFC = memo(() => {
  return (
    <Container maxW="container.xl">
      <WeeklyTextArea />
    </Container>
  );
});
