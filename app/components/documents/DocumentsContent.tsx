"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { Card, CardHeader, CardBody, Divider, Link } from "@nextui-org/react";

function DocumentsContent() {
  const projects = [
    {
      title: "MPI Analysis",
      description: "Data Decomposition, MPI, C, Parallelism",
      icon: "🔢",
      longDescriptions:
        "The use of MPI for data decomposition in C projects is a common technique in parallel computing. Data decomposition or data partitioning, is a technique used in parallel computing to divide a large dataset into smaller, manageable chunks that can be processed concurrently by multiple processes or threads. This approach aims to optimize performance and resource utilization by allowing the computation tasks to run in parallel, reducing the overall execution time.",
      file: "MPI_Algorithmic_Performance_Analysis.pdf",
      authors: "Justin Newman and Andrew Fleming",
    },
    {
      title: "OpenMP Analysis",
      description: "Linear Algebra, Parallelism, C, OpenMP",
      icon: "➕",
      longDescriptions:
        "OpenMP (Open Multi-Processing) is a popular method for adding parallelism to C programs. It is a set of compiler directives and library functions that allowed us to specify which parts of the program can be executed in parallel by multiple threads. By distributing the work among multiple threads, we significantly speed up the execution of computationally-intensive applications on the JMU cluster. We discuss the number of threads, the data sharing between threads, and the synchronization of threads to avoid race conditions and ensure correctness. We elaborate on the process we used to achieve our multi-threaded performance results.",
      file: "OPENMP_ANALYSIS.pdf",
      authors: "Justin Newman and Andrew Fleming",
    },
    {
      title: "Parallel Image Processing",
      description: "CUDA, GPU Acceleration, Parallel Programming, C, Threads",
      icon: "🖼️",
      longDescriptions:
        "Developing CUDA implementations of many popular image processing techniques. CUDA, or Compute Unified Device Architecture, is a parallel computing collection of libraries, tools, and technologies developed by NVIDIA. It allows software developers to harness the power of Graphics Processing Units for general-purpose computing tasks, not just graphics rendering.",
      file: "Parallel_Image_Processing_with_CUDA.pdf",
      authors: "Justin Newman, TJ Davies, Austin Bond, and Andrew Fleming",
    },
    {
      title: "AI Art Analysis",
      description:
        "Artificial Inteligence, Machine Learning, Art, Market Trends",
      icon: "🎨",
      longDescriptions:
        "This analysis has the focus of acknowledging the perspectives of Artists, Collectors, and the General public as machine learning makes an impression on the Arts.",
      file: "AI_ART_ANALYSIS.pdf",
      authors: "Justin Newman and revisions from Dr. Kirkpatrick",
    },
    {
      title: "Machine Learning",
      description: "MachineLearning, Python, R, Statistics",
      icon: "🤖",
      longDescriptions:
        "This presentation introduces supervised and unsupervised learning, highlighting their differences and the typical algorithms used in each approach. It also mentions classification and regression techniques, explaining their applications and providing examples of commonly used algorithms. Additionally, specific datasets such as MTCARS, Fast Food, and Heart Failure are mentioned, along with their attributes and purposes. The presentation further describes Lasso and Ridge regression, outlining their regularization techniques and advantages. Finally, K-Nearest Neighbors (KNN) classification is introduced as a non-parametric technique that finds the k nearest neighbors to a given data point.",
      file: "MachineLearning.pdf",
      authors:
        "Dana Sutfin, Hannah Phommachanthone, Justin Matthew Newman, and Grace Dwinnell.",
    },
    {
      title: "Data Visualization",
      description: "Data, Visualization, Charts, Graphs, R, Statistics",
      icon: "📊",
      longDescriptions:
        "The provided analysis focuses on the SOL (Standards of Learning) test pass rates in the Commonwealth of Virginia from 2018 to 2021. The analysis examines various subgroups, including race, gender, and economic disadvantage, to understand the patterns and trends in test performance. Several figures are presented to visualize the distributions of pass rates for different subjects, such as math, science, and reading. The analysis reveals that pass rates vary across different subgroups, with female students generally having a higher median pass rate compared to male students. Additionally, regression analyses are conducted, including linear regression and logistic regression, to explore relationships between pass rates and variables such as race. The analysis provides insights into the performance of students on SOL tests and highlights disparities among different subgroups. This presentation and analysis was developed by Justin Matthew Newman and Matthew Mee.",
      file: "DataVisualization_R.pdf",
      authors: "Justin Newman with editing from Matthew Mee",
    },
  ];

  return (
    <div>
      <Card>
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                fontFamily:
                  "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              }}
              className="text-md"
            >
              Documents
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Accordion>
            {projects.map((concept, index) => (
              <AccordionItem
                aria-label={concept.title}
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        fontFamily:
                          "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                        marginLeft: "4px",
                      }}
                    >
                      {concept.title}
                    </h4>
                  </div>
                }
                subtitle={ 
                  <div style={{ display: "flex",flexDirection: 'column' }}>
                    <h4
                      className="p-1 text-default-500"
                      style={{ marginLeft: "4px" }}
                    >
                      {concept.authors}
                    </h4>
                    <h4
                      className="p-1 text-default-500"
                      style={{ marginLeft: "4px" }}
                    >
                      {concept.description}
                    </h4>
                  </div>
                }
                key={index}
                style={{
                  width: "100%",
                }}
              >
                <p className="p-1 text-default-500">
                  {concept.longDescriptions}
                </p>
                <Link href={`/documents/${concept.file}`} isExternal>
                  <div className="button-85 flex items-center p-8 m-7">
                    PDF
                  </div>
                </Link>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </div>
  );
}

export default DocumentsContent;
