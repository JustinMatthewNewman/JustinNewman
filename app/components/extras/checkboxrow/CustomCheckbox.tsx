import React from "react";
import {Chip} from "@nextui-org/react";
import {CheckIcon} from './CheckIcon'


export const CustomCheckbox = (props: any) => {
  

  return (
      <Chip
        classNames={{
          base: "border-default hover:bg-default-200",
          content: "text-default-500",
        }}
        color="primary"
        startContent={<CheckIcon className="ml-1" /> }
        variant="faded"
      >
        {props.children}
      </Chip>
  );
}
