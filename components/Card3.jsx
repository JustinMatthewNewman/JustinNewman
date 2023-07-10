import { useEffect } from 'react';
import Link from 'next/link';


import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { usePress } from "react-aria";

import { useTheme } from '../contexts/ThemeContext';
export const Card3 = () => {

    const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

    return (
        <Link href='/star'>

        <Card
        isPressable
        isHoverable
            variant="bordered"
            style={{ border: `1px solid ${theme.toggleBorder}`, backgroundColor: theme.toggleBorder }}
            css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        Java, Jsoup
                    </Text>

                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={`assets/projects/${theme.starImg}`}
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
                            Athletic Statistics Software
                        </Text>
                        <Text style={{ color: `${theme.text}` }} size={12}>
                            ESPN style graphics.
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
        </Link>

    );
};
export default Card3;