import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Card, Text, Grid } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../contexts/themes";

import header from "../public/assets/datascience-min.png";

const AboutPage = () => {
    const { theme, toggleTheme } = useTheme();

    const Card4 = dynamic(() => import("../components/FoodCard"));
    const Card5 = dynamic(() => import("../components/TravelCard"));
    const BlogCard = dynamic(() => import("../components/BlogCard"));
    const LinkCard = dynamic(() => import("../components/Card7"));

    useEffect(() => {
        // Here you need to update your styles based on the theme
        document.body.style.backgroundColor = theme.body;
        document.body.style.color = theme.text;
        // add other style updates as needed
    }, [theme]);

    const getCurrentHour = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Morning";
        } else if (currentHour < 18) {
            return "Afternoon";
        } else {
            return "Evening";
        }
    };

    const greeting = `Good ${getCurrentHour()}!`;

    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative top-5rem">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10" />
                <Image
                    style={
                        theme === darkTheme
                            ? { filter: "blur(2px) ", opacity: 0.5 }
                            : { filter: "blur(2px) invert(1) hue-rotate(240deg)", opacity: 0.5 }
                    }
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={header}
                    alt="/"
                />
                <div className="absolute top-[40%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]  text-white z-10 p-2">
                    <Text
                        h2
                        style={{ color: "white" }}
                        className="py-2">
                        Additional Blogs
                    </Text>
                    <Text
                        h3
                        style={{ color: "#e1e1e1" }}>
                        Likes | Food | Hikes
                    </Text>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-2 py-8">
                <div
                    style={{ padding: "7px" }}
                    className="col-span-full md:col-span-4">
                    <h2 className="text-3xl font-bold mb-4">{greeting}</h2>
                    <p className="text-lg mb-4">
                        I&apos;m Justin Newman, a Jr. software engineer and live broadcast
                        technician based in Virginia.
                    </p>
                    <p className="text-lg mb-4">
                        With a Bachelor&apos;s degree in Computer Science from James Madison
                        University, I have a solid foundation in various programming languages like
                        Java, JavaScript, Python, and C.
                    </p>
                    <p className="text-lg mb-4">
                        I love crafting interactive web experiences and building innovative
                        solutions. Whether it&apos;s creating a full-stack platform like Melodify
                        Labs that transforms text prompts into songs or developing a scalable social
                        media application like CSCode.org, I&apos;m always seeking to push the
                        boundaries of what&apos;s possible in the digital world.
                    </p>
                    <p className="text-lg mb-4">
                        As an agile developer, I thrive in collaborative environments and excel at
                        utilizing cutting-edge technologies to deliver high-quality, user-centered
                        solutions. With experience in Git, React, Next.js, and more, I ensure that
                        every project I work on is both visually stunning and technically sound.
                    </p>

                    <p className="text-lg mb-4">
                        I&apos;m a human being, and just like anyone else, I&apos;m filled with
                        emotions, aspirations, feelings, and desires that shape my journey through
                        life. In addition to savoring the rich culture of human experiences, I
                        channel my passions into various creative outlets. One such avenue is my
                        blog, &quot;JMU Food,&quot; where I enthusiastically share my culinary
                        escapades in the vibrant town of Harrisonburg. From hidden gems to iconic
                        eateries, I relish the opportunity to explore and document the diverse
                        gastronomic landscape that surrounds me.
                    </p>
                    <p className="text-lg mb-4">
                        Beyond the dining table, I&apos;m an avid nature enthusiast. My blog,
                        &quot;WanderVA,&quot; serves as a testament to my love for the great
                        outdoors. Whether it&apos;s traversing scenic hiking trails, conquering
                        challenging peaks, or simply immersing myself in the serenity of nature, I
                        find solace and inspiration in every step I take. Through
                        &quot;WanderVA,&quot; I strive to inspire others to embark on their own
                        outdoor adventures and connect with the beauty of Virginia&apos;s
                        landscapes.
                    </p>
                    <p className="text-lg mb-4">
                        However, my creative journey doesn&apos;t stop there. On my Tumblr blog,
                        I&apos;ve lovingly archived thousands of inspiring photographs that have
                        touched my heart and ignited my imagination. These snapshots of beauty, both
                        subtle and grand, serve as a visual diary of the world&apos;s wonders that
                        resonate with my soul.
                    </p>
                    <BlogCard />
                    <p className="text-lg mb-4">
                        In essence, I am a human with a deep appreciation for life&apos;s flavors,
                        the majesty of the natural world, and the aesthetic allure of captivating
                        imagery. Through my blogs, I endeavor to share these passions, allowing
                        others to glimpse the world through my eyes and perhaps discover their own
                        sources of joy and inspiration along the way.
                    </p>
                </div>
                <Grid.Container
                    direction="column"
                    gap={2}
                    className="p-3">
                    <Grid>
                        <Card4 />
                    </Grid>

                    <Grid>
                        <Card5 />
                    </Grid>
                    <Grid>
                        <LinkCard link="/more" />
                    </Grid>
                </Grid.Container>
            </div>
        </div>
    );
};

export default AboutPage;
