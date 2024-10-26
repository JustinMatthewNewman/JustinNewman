import React from "react";
import {Badge, Avatar, Switch} from "@nextui-org/react";
import {NotificationIcon} from "./NotificationIcon";
import {CartIcon} from "./CartIcon"

export default function SidePanelSettings() {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Badge color="primary" content={4} isInvisible={isInvisible} shape="circle">
          <NotificationIcon className="fill-current" size={30} height={undefined} width={undefined} />
        </Badge>
        <Badge color="primary" content={72} isInvisible={isInvisible} shape="circle">
          <CartIcon size={30} height={undefined} width={undefined} />
        </Badge>
      </div>
    </div>
  );
}
