import React from "react";
import {Calendar, Card, CardBody} from "@nextui-org/react";
import {today, getLocalTimeZone, isWeekend} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";

export default function HeroPanel() {
    let [date, setDate] = React.useState(today(getLocalTimeZone()));
    let {locale} = useLocale();
    let isInvalid = isWeekend(date, locale);
  return (
    <Card className="w-full h-[30rem] p-4">
      <CardBody className="mt-2">
      <Calendar
        aria-label="Date (Invalid on weekends)"
        errorMessage={isInvalid ? "We are closed on weekends" : undefined}
        isInvalid={isInvalid}
        value={date}
        onChange={setDate}
        />
      </CardBody>
    </Card>
  );
}
