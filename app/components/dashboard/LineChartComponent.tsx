import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

// Sample data for the line chart
const data = [
  { name: 'January', 'Office - 01': 2500, 'Office - 02': 1153, 'Office - 03': 456, 'Office - 04': 123 },
  { name: 'February', 'Office - 01': 3200, 'Office - 02': 3700, 'Office - 03': 1007, 'Office - 04': 456 },
  { name: 'March', 'Office - 01': 2800, 'Office - 02': 4900, 'Office - 03': 1234, 'Office - 04': 1243 },
  { name: 'April', 'Office - 01': 3900, 'Office - 02': 5200, 'Office - 03': 2699, 'Office - 04': 4600 },
  { name: 'May', 'Office - 01': 4500, 'Office - 02': 4000, 'Office - 03': 3000, 'Office - 04': 6000 },
  { name: 'June', 'Office - 01': 3700, 'Office - 02': 4300, 'Office - 03': 4600, 'Office - 04': 5200 },
  { name: 'July', 'Office - 01': 2900, 'Office - 02': 5500, 'Office - 03': 3800, 'Office - 04': 5700 },
  { name: 'August', 'Office - 01': 4000, 'Office - 02': 4800, 'Office - 03': 4100, 'Office - 04': 5900 },
  { name: 'September', 'Office - 01': 3700, 'Office - 02': 5000, 'Office - 03': 4500, 'Office - 04': 9000 },
  { name: 'October', 'Office - 01': 4100, 'Office - 02': 5200, 'Office - 03': 5678, 'Office - 04': 6400 },
  { name: 'November', 'Office - 01': 3400, 'Office - 02': 4900, 'Office - 03': 6007, 'Office - 04': 6200 },
  { name: 'December', 'Office - 01': 7877, 'Office - 02': 9888, 'Office - 03': 7006, 'Office - 04': 14567 },
];

export default function LineChartComponent() {
  return (
    <Card className="w-full mt-6 mb-6 z-10">
      <CardHeader>
        <h2>ECS Office Sales 2023 YTD</h2>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            {/* Area and Line for Office - 01 */}
            <Area type="monotone" dataKey="Office - 01" stroke="#4a90e2" fill="#4a90e2" fillOpacity={0.3} />
            <Line type="monotone" dataKey="Office - 01" stroke="#4a90e2" activeDot={{ r: 8 }} />
            
            {/* Area and Line for Office - 02 */}
            <Area type="monotone" dataKey="Office - 02" stroke="#5bb0e9" fill="#5bb0e9" fillOpacity={0.3} />
            <Line type="monotone" dataKey="Office - 02" stroke="#5bb0e9" />
            
            {/* Area and Line for Office - 03 */}
            <Area type="monotone" dataKey="Office - 03" stroke="#7fd1ec" fill="#7fd1ec" fillOpacity={0.3} />
            <Line type="monotone" dataKey="Office - 03" stroke="#7fd1ec" />
            
            {/* Area and Line for Office - 04 */}
            <Area type="monotone" dataKey="Office - 04" stroke="#99d7f6" fill="#99d7f6" fillOpacity={0.3} />
            <Line type="monotone" dataKey="Office - 04" stroke="#99d7f6" />
          </AreaChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}