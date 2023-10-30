import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";

export default function CheckBoxRow() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup className="gap-1" orientation="horizontal">
        <CustomCheckbox>JMU</CustomCheckbox>
        <CustomCheckbox>UVA</CustomCheckbox>
        <CustomCheckbox>VMI</CustomCheckbox>
        <CustomCheckbox>W&M</CustomCheckbox>
      </CheckboxGroup>
    </div>
  );
}
