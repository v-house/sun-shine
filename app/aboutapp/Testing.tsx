import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "Access",
      label: "Quick Access",
      content:
        "Get quick access to all important sunshine member details including counsellors, faculty members and student group.",
    },
    {
      id: "Slot",
      label: "Book Slot",
      content:
        "Book a slot for a meet with counsellors. Let the counsellors help you even more effectively.",
    },
  ];

  return (
    <div className="flex w-full flex-col mt-4">
      <Tabs aria-label="Dynamic tabs" items={tabs} className="">
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
            className="bg-transparent pl-0 p-4"
          >
            <Card className="h-44 bg-yellow-400 rounded-lg shadow-none">
              <CardBody className="text-black">{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
