import { Card, Col, Row, Text } from "@nextui-org/react";
import { usePress } from "react-aria";

export const Card5 = () => {
    const { pressProps, isPressed } = usePress({
        onPress: () => {
            // Handle the press event here
            window.location.href = "https://w3stu.cs.jmu.edu/newma4jm/website/index.html";
        }
    });

    return (
        <Card
            variant="bordered"
            css={{ w: "100%", h: "400px" }}
            isPressable
            isHoverable
            {...pressProps}
        >
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
                            <Col span={3}></Col>
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
                            {/* Add your button or additional components here */}
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};

export default Card5;
