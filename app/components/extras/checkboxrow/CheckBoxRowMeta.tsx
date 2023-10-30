import React from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";

export default function CheckBoxRowMeta() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup className="gap-1" orientation="horizontal">
        <CustomCheckbox>React</CustomCheckbox>
        <CustomCheckbox>Node.js</CustomCheckbox>
        <CustomCheckbox>Javascript</CustomCheckbox>
        <CustomCheckbox>DynamoDB</CustomCheckbox>
        <CustomCheckbox>AWS</CustomCheckbox>
        <CustomCheckbox>MUI</CustomCheckbox>
      </CheckboxGroup>
    </div>
  );
}
