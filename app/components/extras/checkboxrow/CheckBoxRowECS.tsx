import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";

export default function CheckBoxRowECS() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup className="gap-1" orientation="horizontal">
        <CustomCheckbox>SQL</CustomCheckbox>
        <CustomCheckbox>Cold fusion</CustomCheckbox>
        <CustomCheckbox>C#</CustomCheckbox>
        <CustomCheckbox>Backbone.js</CustomCheckbox>
      </CheckboxGroup>
    </div>
  );
}
