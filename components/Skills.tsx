import React, { useEffect } from "react";
import { Collapse, Text, Grid, Link } from "@nextui-org/react";
import { FaPython, FaJava, FaReact, FaJsSquare } from "react-icons/fa";
import { SiC, SiFirebase } from "react-icons/si";
import { lightTheme, darkTheme } from "../contexts/themes";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);
  return (
    // <div id="skills" className="w-full p-4 flex justify-center">
    //   <div className="max-w-[1240px] mx-auto px-2 py-16 pt-32 flex flex-col items-center">
    //     <div className="font-montserrat font-bold w-full">
          <Grid.Container gap={2} justify="center">
            <Grid style={{ zIndex: 2 }}>
              <Collapse.Group
                shadow
                style={{
                  backgroundColor: `${theme.sidenav}`,
                  color: `${theme.text}`,
                }}
              >
                <Collapse
                  title={
                    <Text h4 style={{ color: `${theme.text}` }}>
                      Python 3
                    </Text>
                  }
                  subtitle="Can you discuss a complex Python project you worked on and explain how you utilized its features and libraries to solve the problem efficiently?"
                  contentLeft={<FaPython size={30} />}
                >
                  <Text style={{ color: `${theme.text}` }}>
                    In CS412 Applied Algorithms, I worked on solving the
                    knapsack problem efficiently using dynamic programming
                    techniques in Python. I optimized the computation by
                    leveraging memoization and utilizing Python&apos;s data
                    structures like dictionaries and lists. Additionally, I
                    implemented Dijkstra&apos;s algorithm, Bellman-Ford
                    algorithm, Prim&apos;s algorithm, and Burvka&apos;s
                    algorithm for graph-related problems. I utilized advanced
                    language features such as higher order functions, lambda
                    functions, and list comprehension.
                  </Text>
                </Collapse>
                <Collapse
                  title={
                    <Text h4 style={{ color: `${theme.text}` }}>
                      Java
                    </Text>
                  }
                  subtitle="Describe a Java application you developed that involved interacting with external systems."
                  contentLeft={<FaJava size={30} />}
                >
                  <Text style={{ color: `${theme.text}` }}>
                    I developed a Java application that interacted with external
                    systems to fetch and process athletic statistics for teams.
                    The application utilized the Jsoup library to scrape player
                    stats from websites in a quick and efficient manner. I
                    implemented a custom parser using Jsoup to extract relevant
                    data from the HTML documents. The retrieved statistics were
                    then rendered onto ESPN-style graphic cards with custom
                    colors representing the respective university. The Java
                    application provided a streamlined process for gathering and
                    displaying team athletic statistics, saving significant time
                    and effort.
                  </Text>
                </Collapse>
                <Collapse
                  title={
                    <Text h4 style={{ color: `${theme.text}` }}>
                      x86
                    </Text>
                  }
                  subtitle="How have you applied low-level systems understanding to optimize performance in a software project?"
                  contentLeft={<SiC size={30} />}
                >
                  <Text style={{ color: `${theme.text}` }}>
                    In CS470 Parallel and Distributed systems, I gained
                    experience in optimizing software performance through
                    low-level systems understanding. I utilized technologies
                    like OpenMP, MPI, and CUDA to exploit parallelism and
                    utilize hardware resources effectively. By leveraging
                    multiple threads, processes, and GPU cores, I improved the
                    performance of computationally intensive tasks. This
                    low-level optimization allowed me to achieve significant
                    speedup in the execution of algorithms and simulations. The
                    analysis work from these projects are posted on my resume
                    sections.
                  </Text>
                </Collapse>
                <Collapse
                  title={
                    <Text h4 style={{ color: `${theme.text}` }}>
                      React
                    </Text>
                  }
                  subtitle="Tell us about a React project you worked on, highlighting how you effectively managed state, component hierarchy, and data flow within the application."
                  contentLeft={<FaReact size={30} />}
                >
                  <Text style={{ color: `${theme.text}` }}>
                    As a Junior Software Engineer at Metalinguist LLC, I
                    successfully managed state, component hierarchy, and data
                    flow within the React-based client portal and digital
                    storefront for the translation industry. Contributions
                    include implementing an administrative reporting dashboard,
                    following Apple HIG design guidelines, and utilizing
                    React.js and CSS for UI enhancements. I collaborated
                    effectively in a remote environment using agile
                    methodologies, provided creative solutions leveraging
                    higher-order functions, strengthened field validation using
                    React.js and DynamoDB, and optimized system performance
                    through efficient data fetching and API utilization.{" "}
                  </Text>
                </Collapse>
                <Collapse
                  title={
                    <Text h4 style={{ color: `${theme.text}` }}>
                      JavaScript
                    </Text>
                  }
                  subtitle="Discuss a complex JavaScript project you developed, focusing on how you utilized advanced language features."
                  contentLeft={<FaJsSquare size={30} />}
                >
                  <Text style={{ color: `${theme.text}` }}>
                    I developed a data visualization tool that plotted car
                    accidents across a map of the US. One challenge was the
                    large size of the data files, which limited efficient
                    analysis. To overcome this obstacle, I implemented a data
                    segmentation approach, splitting the data into smaller
                    segments and distributing them across various hosts. I
                    utilized advanced language features like asynchronous
                    programming and promises to handle the distributed
                    processing efficiently. By leveraging JavaScript&apos;s
                    capabilities, I effectively visualized the car accident
                    data, providing insights into patterns and trends while
                    efficiently managing large datasets.
                  </Text>
                </Collapse>
                <Collapse
                  title={
                    <Text h4 style={{ color: `${theme.text}` }}>
                      Firebase
                    </Text>
                  }
                  subtitle="Have you used Firebase as a backend solution in any of your projects? Describe Firebase's real-time database, authentication, and cloud functions."
                  contentLeft={<SiFirebase size={30} />}
                >
                  <Text style={{ color: `${theme.text}` }}>
                    In a CSCode Instagram clone, Firebase&apos;s real-time
                    database feature was employed to store and synchronize user
                    posts, comments, and likes in real-time. This allowed users
                    to experience instant updates and interactions within the
                    application. Firebase&apos;s authentication service was
                    utilized for user authentication, enabling secure access to
                    the Instagram clone. In another project, Melodify Labs&apos;
                    song generation platform, Firebase&apos;s cloud functions
                    were utilized to handle serverless computation tasks. This
                    allowed for efficient execution of heavy computation tasks
                    in the background, enabling the generation of complex
                    musical compositions in real-time.
                  </Text>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skills;
