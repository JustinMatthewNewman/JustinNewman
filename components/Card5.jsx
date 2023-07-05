import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Link from "next/link";


export const Card5 = () => (
    <Link href="https://w3stu.cs.jmu.edu/newma4jm/website/index.html">

  <Card 
  isPressable
  isHoverable
  variant="bordered"
  css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      {/* <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Your day your way
        </Text>
        <Text h3 color="white">
          Your checklist for better sleep
        </Text>
      </Col> */}
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="/assets/projects/webdev.webp"
                objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                JMU WebDev Club
              </Text>
              <Text color="#d1d1d1" size={12}>
                A coding collective.
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            {/* <Button
              flat
              auto
              rounded
              css={{ color: "#94f9f0", bg: "#94f9f026" }}
            >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                OPEN
              </Text>
            </Button> */}
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </Link>

);
export default Card5;