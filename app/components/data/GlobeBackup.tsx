import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, Link} from "@nextui-org/react";

export default function GlobeBackup() {
  return (
    <div>

    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button>Loading issue ?</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Some browsers may not support this content.</div>
          <div className="text-tiny">Please use an updated version of chrome, firefox, or safari.</div>
        </div>
      </PopoverContent>
    </Popover>
    <Link href='https://observablehq.com/@justinmatthewnewman/bitcoin-nodes-per-country' isExternal showAnchorIcon className="px-6">Click here</Link>
    </div>
  );
}
