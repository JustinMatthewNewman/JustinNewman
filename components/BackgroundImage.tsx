import React from "react";

import { useTheme } from "../contexts/ThemeContext";
import header2 from "../public/assets/background/light-background.png";
import Image from "next/image"; // Import next/image
import { lightTheme, darkTheme } from "../contexts/themes";

function BackgroundImage() {
    const { theme } = useTheme();

    return (
        <div>
            <Image
                src={header2} // Replace with your image path
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100} // Adjust image quality
                style={{
                    filter: theme === lightTheme ? "hue-rotate(270deg)" : "none",
                    zIndex: -1,
                    opacity: theme === lightTheme ? 0.2 : 1,
                }}
            />
        </div>
    );
}

export default BackgroundImage;
