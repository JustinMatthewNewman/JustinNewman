import { useEffect } from 'react';

import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { usePress } from "react-aria";

import { lightTheme, darkTheme } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext';

export const Card2 = () => {
    const { pressProps, isPressed } = usePress({
        onPress: () => {
            // Handle the press event here
            window.location.href = "https://www.CSCODE.org";
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
        <Card>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        React, NextAuth, Tailwind CSS, FIREBASE
                    </Text>

                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={`assets/projects/${theme.cscodeImg}`}
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
                    bgBlur: theme.footerBlur,
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text style={{ color: `${theme.text}` }} size={12}>
                            https://www.CSCODE.org
                        </Text>
                        <Text style={{ color: `${theme.text}` }} size={12}>
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
};
export default Card2;