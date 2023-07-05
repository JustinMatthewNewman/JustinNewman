import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card2 = () => (
  <Card 
  isPressable
  isHoverable
  variant="bordered"
  css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
        React, NextAuth, Tailwind CSS, FIREBASE
        </Text>
        
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="assets/projects/iphone.webp"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            https://www.CSCODE.org
          </Text>
          <Text color="#000" size={12}>
            Instagram Clone.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            {/* <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Notify Me
              </Text>
            </Button> */}
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
export default Card2;