
import { useEffect } from 'react';

import { Card, Col, Row, Text } from "@nextui-org/react";
import { usePress } from "react-aria";
import { lightTheme, darkTheme } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext';
export const Card5 = () => {
    const { pressProps, isPressed } = usePress({
        onPress: () => {
            // Handle the press event here
            window.location.href = "https://w3stu.cs.jmu.edu/newma4jm/website/index.html";
        }
    });
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
      // Here you need to update your styles based on the theme
      document.body.style.backgroundColor = theme.body;
      document.body.style.color = theme.text;
      // add other style updates as needed
    }, [theme]);
    return (
        <Card
            variant="bordered"
            css={{ w: "100%", h: "400px" }}
            isPressable
            isHoverable
            style={{ border: `1px solid ${theme.toggleBorder}`, backgroundColor: theme.toggleBorder }}
            {...pressProps}
        >
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={`/assets/projects/${theme.webDevImg}`}
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
                    bgBlur: theme.footerBlur,
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col span={3}></Col>
                            <Col>
                                <Text style={{ color: `${theme.text}` }} size={12}>
                                    JMU WebDev Club
                                </Text>
                                <Text style={{ color: `${theme.text}` }} size={12}>
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
