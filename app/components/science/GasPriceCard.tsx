import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import GasPrice from "../data/GasPrice";
export default function GasPriceCard() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">
      <Card className="max-w-[1200px] mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            src="https://github.com/justinmatthewnewman.png"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">
              Rapid API USA. Gas Price by State.
            </p>
            <p className="text-small text-default-500">Justin Newman</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="py-2">
            Utilizing the power of D3 Observable notebooks, I have seamlessly
            harnessed Rapid API&apos;s data to create an interactive choropleth map
            of the United States, providing gas price data at a
            glance. With the fusion of D3&apos;s data visualization capabilities and
            Observable&apos;s interactivity, I&apos;ve designed a dynamic and
            user-friendly tool that allows you to explore gas prices across the
            nation with ease. Whether you&apos;re a traveler planning your journey or
            a data enthusiast analyzing trends, my choropleth map delivers an
            intuitive and informative experience, keeping you informed about
            gas prices by state in an engaging and visually appealing manner.
          </p>
          <div className="mt-4">
          <GasPrice/>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://observablehq.com/@justinmatthewnewman/state-choropleth-gas-prices"
          >
            Visit Observable notebook.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
