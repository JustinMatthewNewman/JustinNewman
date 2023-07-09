import { useEffect } from 'react';


import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { usePress } from "react-aria";

import { lightTheme, darkTheme } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext';
export const Card4 = () => {
    const { pressProps, isPressed } = usePress({
        onPress: () => {
            // Handle the press event here
            window.location.href = "/resume";
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
            isPressable
            isHoverable
            {...pressProps}
            style={{ border: `1px solid ${theme.toggleBorder}`, backgroundColor: theme.toggleBorder }}
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
                    src={`/assets/projects/${theme.docsImg}`}
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
                            <Col span={3}>
                                <Card.Image
                                    src="/assets/projects/google.png"
                                    css={{ bg: "transparent", br: "10%" }}
                                    height={40}
                                    width={40}
                                    alt="Breathing app icon"
                                />
                            </Col>
                            <Col>
                                <Text style={{ color: `${theme.text}` }} size={12}>
                                    Analysis Work
                                </Text>
                                <Text style={{ color: `${theme.text}` }} size={12}>
                                    by Justin Newman
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

    );
};
export default Card4;