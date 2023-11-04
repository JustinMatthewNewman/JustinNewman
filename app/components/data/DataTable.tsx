"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "USA",
    role: "$ 18,560,000 M",
    status: "66488",
  },
  {
    key: "2",
    name: "China",
    role: "$ 21,140,000 M",
    status: "60077",
  },
  {
    key: "3",
    name: "Russia",
    role: "$ 37,450,000 M",
    status: "31295",
  },
  {
    key: "4",
    name: "Germany",
    role: "$ 39,790,000 M",
    status: "28615",
  },
];

const columns = [
  {
    key: "key",
    label: "Rank",
  },
  {
    key: "name",
    label: "Country",
  },
  {
    key: "role",
    label: "GDP",
  },
  {
    key: "status",
    label: "BTC Nodes",
  },
];

export default function DataTable() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
