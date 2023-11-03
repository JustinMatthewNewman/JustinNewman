import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'
import CheckBoxRow from '../extras/checkboxrow/CheckBoxRow'

function LifeCard() {
  return (
    <div>
        <Card className="mt-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col  ">
            <p className="text-md">
              +100 LIVE UNIVERSITY SPORTS BROADCASTING EVENTS
            </p>

            <p className="text-small text-default-500 items-left">
              Technical Operations contracted by Telemedia Productions.
            </p>
            <p className="text-small text-default-500 items-right">
              9/20/2018 - Present
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            During my employment I have provided diverse forms of technical
            assistance to various broadcast crews including iPhone screen repair, freelance
            software engineering, camera operation, replay-unit operation, and
            statistical graphics rendering.
          </p>

          <p className="mt-2 mb-2">
          Referenceable Broadcasting Departments
          </p>
          <div className="mt-4 mb-4">
            <CheckBoxRow />
          </div>

          <ul className="p-4">
            <li className="mt-1 mb-1">
              ✰ Developed an automated open source ESPN-Inspired Athletic
              Statistical Graphics Rendering software that gathers individual
              player data for each athlete and generates ESPN-style
              informational graphics. Leveraged Java and Jsoup library,
              processing team roster URLs to efficiently collect and present the
              statistics. Generates graphics for entire team’s in seconds
              including sideline personnel, for all sports, for almost all
              universities.
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  )
}

export default LifeCard