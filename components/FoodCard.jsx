import { Card, Col, Row, Text } from "@nextui-org/react";
import { usePress } from "react-aria";

export const FoodCard = () => {
    const { pressProps, isPressed } = usePress({
        onPress: () => {
            // Handle the press event here
            window.location.href = "https://jmufood.com";
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
             <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderBottom: "$borderWeights$light solid $gray800",
                    top: 0,
                    zIndex: 1,
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col span={3}></Col>
                            <Col>
                                <Text color="#d1d1d1" size={12}>
                                https://jmufood.com
                                </Text>
                                <Text color="#d1d1d1" size={12}>
                                    Harrisonburg, VA.
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
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="/assets/food.webp"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
           
        </Card>
    );
};

export default FoodCard;
