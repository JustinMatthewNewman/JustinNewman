import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import React from "react";

export default function EcsOfficeQueue() {
  const defaultContent =
    "Office located at 1050 International Boulevard, Clarksville, TN 37040. Contact: 931.241.6512.";

  const offices = [
    {
      key: "1",
      title: "ECS Mid-Atlantic, LLC",
      subtitle: (
        <p className="flex">
          Regional Manager: <span className="text-primary ml-1">Salvatore Fiorentino</span>
        </p>
      ),
      avatarUrl: "https://www.ecslimited.com/wp-content/uploads/2022/03/Fiorentino-Sal-2020-s2e82b.jpeg",
    },
    {
      key: "2",
      title: "ECS Florida, LLC",
      subtitle: (
        <p className="flex">
          Regional Manager: <span className="text-primary ml-1">Joe Champion</span>
        </p>
      ),
      avatarUrl: "https://www.ecslimited.com/wp-content/uploads/2022/03/Joe-Champion-Color-g0nsl6.jpeg",
    },
    {
      key: "3",
      title: "ECS Southwest, LLP",
      subtitle: (
        <p className="flex">
          Regional Manager: <span className="text-primary ml-1">Mark Zortman</span>
        </p>
      ),
      avatarUrl: "https://www.ecslimited.com/wp-content/uploads/2022/03/mark-askd0w.png",
    },
    {
      key: "4",
      title: "ECS Midwest, LLC",
      subtitle: (
        <p className="flex">
          Regional Manager: <span className="text-primary ml-1">Chris Lopez</span>
        </p>
      ),
      avatarUrl: "https://www.ecslimited.com/wp-content/uploads/2022/03/Chris-Lopez-2021-342dbr.png",
    },
  ];

  return (
    <div>
      <Accordion selectionMode="multiple">
        {offices.map((office) => (
          <AccordionItem
            key={office.key}
            aria-label={office.title}
            startContent={
              <Avatar
                isBordered
                color="primary"
                radius="lg"
                src={office.avatarUrl}
              />
            }
            subtitle={office.subtitle}
            title={office.title}
          >
            {defaultContent}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}