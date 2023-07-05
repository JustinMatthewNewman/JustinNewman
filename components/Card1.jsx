import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { usePress } from "react-aria";

export const Card1 = () => {
    const { pressProps, isPressed } = usePress({
        onPress: () => {
            // Handle the press event here
            window.location.href = "https://www.MelodifyLabs.com";
        }
    });
    return (
        <Card
            isPressable
            isHoverable
            {...pressProps}
            variant="bordered"
            css={{ w: "100%", h: "400px" }}>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="assets/projects/melodifylabs.webp"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="MELODIFY LABS"
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
                            https://MeodifyLabs.com
                        </Text>
                        <Text color="#000" size={12}>
                            AI Powered Song Generation
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
};

export default Card1;