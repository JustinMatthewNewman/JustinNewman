import React from "react";
import { Button, Calendar, Card, CardFooter, CardHeader } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function SchedulePanel() {

  let [date, setDate] = React.useState(today(getLocalTimeZone()));
  const handleDateChange = (newDate: any) => {
    setDate(newDate);
    // Redirect when a new date is selected
    window.open('https://schedule.ecslimited.com/', '_blank');
  };

  return (
    <div onClick={() => window.open('https://schedule.ecslimited.com/', '_blank')}
      className="w-full h-full flex items-center justify-center gap-4">
      <Card className="w-full max-w-lg h-[30rem] flex flex-col items-center p-6">
        <CardHeader className="flex justify-center items-center mb-4">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-lg font-semibold">Choose Your Date</h2>
            <Calendar
              aria-label="Date"
              value={date}
              onChange={handleDateChange}
              className="mt-2"
            />
          </div>
        </CardHeader>
        <CardFooter className="flex justify-center mt-4">
          <Button
            as="a"
            href="https://schedule.ecslimited.com/"
            color="primary"
            variant="bordered"
            style={{ padding: '8px 16px', borderRadius: '8px', fontWeight: '500' }}
            className="transition-colors duration-300 hover:bg-blue-600 hover:text-white"
          >
            Schedule Your ECS Work Order
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
