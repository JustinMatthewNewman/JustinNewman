import React from "react";
import { RadioGroup, Radio, cn } from "@nextui-org/react";

export const CustomRadio = (props: any) => {
  const { children, ...otherProps } = props;

  return <Radio {...otherProps}>{children}</Radio>;
};

export default function MoreRadioGroup() {
  return (
    <RadioGroup label="Additional Skills">
      <CustomRadio
        //   description="Up to 20 items"
        value="free"
      >
        Art
      </CustomRadio>
      <CustomRadio
        //   description="Unlimited items. $10 per month."
        value="pro"
      >
        Audio
      </CustomRadio>
      <CustomRadio
        // description="24/7 support. Contact us for pricing."
        value="enterprise"
      >
        Broadcasting
      </CustomRadio>
      <CustomRadio
        // description="24/7 support. Contact us for pricing."
        value="enterprise2"
      >
        System Hardware
      </CustomRadio>
    </RadioGroup>
  );
}
