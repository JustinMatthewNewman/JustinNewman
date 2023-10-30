import React from 'react'
import { Card, CardHeader, CardBody, Divider, CardFooter, Link } from "@nextui-org/react";
export default function SOLAnalysisCard() {
  return (
    <div className=" container flex flex-col md:flex-row items-center justify-center mt-12 gap-4 max-w-[1200px]">

        <Card className="max-w-[1200px] mt-6 mb-6">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">
              Analysis of SOL Test Pass Rates in the Commonwealth of Virginia
            </p>
            <p className="text-small text-default-500">MATH 268</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            In 2022 I conducted a comprehensive analysis of Virginia&apos;s
            &quot;Standards of Learning&quot; (SOL) test pass rates from 2018 to 2021.
            Findings reveal a generally normal pass rate distribution in 2021
            with a slight leftward skew (Fig. 1.1), while gender disparities
            show higher median pass rates for female students (Fig. 1.2). The
            analysis further dissects subject-specific pass rates, indicating a
            pronounced leftward skew in math scores (Fig. 1.4), a wider left
            skew in science scores (Fig. 1.5), and a higher median in reading
            scores (Fig. 1.6). Subgroup comparisons, linear regression analysis
            (Fig. 2.2), and residual matrix assessments provide insights into
            variations among subgroups. Additionally, logistic regression
            predicts student ethnicity based on SOL pass rates. This research
            offers valuable insights for educational policy and decision-making
            in Virginia.
          </p>
        </CardBody>
        <Divider/>
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="/documents/DataVisualization_R.pdf"
          >
            View PDF
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
