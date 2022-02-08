import { memo, useState, VFC } from "react";
import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button
} from "@chakra-ui/react";

import { WeeklyTextArea } from "../organisms/menuTable/WeeklyTextArea";
import { AddList } from "../organisms/menuTable/AddList";

type Week = {
  id: number;
  text: string;
  bg: string;
};

const weektext: Week[] = [
  {
    id: 1,
    text: "月",
    bg: ""
  },
  {
    id: 2,
    text: "火",
    bg: "red.50"
  },
  {
    id: 3,
    text: "水",
    bg: "blue.50"
  },
  {
    id: 4,
    text: "木",
    bg: "teal.50"
  },
  {
    id: 5,
    text: "金",
    bg: "yellow.50"
  },
  {
    id: 6,
    text: "土",
    bg: "cyan.50"
  },
  {
    id: 7,
    text: "日",
    bg: "pink.50"
  }
];

export const MenuTable: VFC = memo(() => {
  const [tabIndex, setTabIndex] = useState<any>(0);
  const bg = weektext[tabIndex].bg;

  return (
    <Container>
      <Tabs
        size="md"
        variant="enclosed"
        pt={3}
        onChange={(index) => setTabIndex(index)}
        bg={bg}
      >
        <TabList>
          {weektext.map((week) => (
            <Tab key={week.id} _selected={{ color: "white", bg: "blue.400" }}>
              {week.text}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {weektext.map((week) => (
            <TabPanel key={week.id}>
              <WeeklyTextArea />
              <br />
              <AddList title="材料リスト" />
              <br />
              <Button colorScheme="blue" boxShadow="lg">
                買い物リスト反映
              </Button>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
});
