import React, { useEffect } from 'react';
import { Collapse, Text, Grid, Button, Card } from "@nextui-org/react";
import { FaFileAlt } from 'react-icons/fa'; // Importing paper icon from react-icons
import { lightTheme, darkTheme } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext';

const Analysis = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

    const files = [
        'newman_justin.pdf',
        'MPI_Algorithmic_Performance_Analysis.pdf',
        'OPENMP_ANALYSIS.pdf',
        'Parallel_Image_Processing_with_CUDA.pdf',
        'AI_ART_ANALYSIS.pdf',
        'MachineLearning.pdf',
        'DataVisualization_R.pdf',
      ];

      const titles = [
        'MPI Analysis',
        'OpenMP Analysis',
        'Parallel Image Processing',
        'AI Art Analysis',
        'Machine Learning',
        'Data Visualization',
      ];
    
      const shortDescriptions = [
        'Data Decomposition, MPI, C, Parallelism',
        'Linear Algebra, Parallelism, C, OpenMP',
        'CUDA, GPU Acceleration, Parallel Programming, C, Threads',
        'Artificial Inteligence, Machine Learning, Art, Market Trends',
        'MachineLearning, Python, R, Statistics',
        'Data, Visualization, Charts, Graphs, R, Statistics',
      ];
    
      const longDescriptions = [
        'The use of MPI for data decomposition in C projects is a common technique in parallel computing. Data decomposition or data partitioning, is a technique used in parallel computing to divide a large dataset into smaller, manageable chunks that can be processed concurrently by multiple processes or threads. This approach aims to optimize performance and resource utilization by allowing the computation tasks to run in parallel, reducing the overall execution time.',
        'OpenMP (Open Multi-Processing) is a popular method for adding parallelism to C programs. It is a set of compiler directives and library functions that allowed us to specify which parts of the program can be executed in parallel by multiple threads. By distributing the work among multiple threads, we significantly speed up the execution of computationally-intensive applications on the JMU cluster. We discuss the number of threads, the data sharing between threads, and the synchronization of threads to avoid race conditions and ensure correctness. We elaborate on the process we used to achieve our multi-threaded performance results.',
        'Developing CUDA implementations of many popular image processing techniques. CUDA, or Compute Unified Device Architecture, is a parallel computing collection of libraries, tools, and technologies developed by NVIDIA. It allows software developers to harness the power of Graphics Processing Units for general-purpose computing tasks, not just graphics rendering.',
        'This analysis has the focus of acknowledging the perspectives of Artists, Collectors, and the General public as machine learning makes an impression on the Arts.',
        'This presentation introduces supervised and unsupervised learning, highlighting their differences and the typical algorithms used in each approach. It also mentions classification and regression techniques, explaining their applications and providing examples of commonly used algorithms. Additionally, specific datasets such as MTCARS, Fast Food, and Heart Failure are mentioned, along with their attributes and purposes. The presentation further describes Lasso and Ridge regression, outlining their regularization techniques and advantages. Finally, K-Nearest Neighbors (KNN) classification is introduced as a non-parametric technique that finds the k nearest neighbors to a given data point. I (Justin Matthew Newman) put together this presenation alongside Dana Sutfin, Hannah Phommachanthone, and Grace Dwinnell.',
        'The provided analysis focuses on the SOL (Standards of Learning) test pass rates in the Commonwealth of Virginia from 2018 to 2021. The analysis examines various subgroups, including race, gender, and economic disadvantage, to understand the patterns and trends in test performance. Several figures are presented to visualize the distributions of pass rates for different subjects, such as math, science, and reading. The analysis reveals that pass rates vary across different subgroups, with female students generally having a higher median pass rate compared to male students. Additionally, regression analyses are conducted, including linear regression and logistic regression, to explore relationships between pass rates and variables such as race. The analysis provides insights into the performance of students on SOL tests and highlights disparities among different subgroups. This presentation and analysis was developed by Justin Matthew Newman and Matthew Mee.',
      ];
    
      const downloadFile = (file) => {
        window.open(`/assets/${file}`, '_blank');
      }

  return (
    <div id='analysis' className='w-full px-4 flex justify-center'>
      <div className="w-full md:w-3/4 mx-auto">
      <div css={{ margin: '12px' }}>
        

              <Grid.Container gap={2} justify="center">
                <Grid style={{zIndex: 2}}>
                <div className="w-full md:w-3/4 mx-auto">
              <Card style={{ backgroundColor: `${theme.nav}`, color: `${theme.text}` }} isHoverable variant="bordered" css={{ mw: "400px", margin: '12px auto' }}>
                <a href={`/assets/${files[0]}`} download>
                  <Card.Body>
                      <div className='flex items-center space-x-2'>
                          <FaFileAlt className='w-8 h-8 text-blue-600'/>
                          <Text style={{ color: `${theme.text}` }}>{files[0]}</Text> <Text style={{ color: `${theme.text}` }}>(Resumé)</Text>
                      </div>
                  </Card.Body>
                </a>
              </Card>          
                  
            </div>
                  <Collapse.Group shadow style={{ backgroundColor: `${theme.nav}`, color: `${theme.text}` }}>
                    {files.slice(1).map((file, index) => (
                        <Collapse
                        key={index}
                        title={<Text h4 style={{ color: `${theme.text}` }}>{titles[index]}</Text>}
                        subtitle={shortDescriptions[index]}
                        contentLeft={
                            <FaFileAlt className='w-8 h-8 text-blue-600'/>
                        }
                        >
                          <div className='p-4'>
                            
                          <Button ghost className="shadow-none" onClick={() => downloadFile(file)}>View</Button>
                          </div>
                        <Text style={{ color: `${theme.text}` }}>{longDescriptions[index]}</Text>
                      </Collapse>
                    ))}
                  </Collapse.Group>
                </Grid>
              </Grid.Container>
                    </div>
            </div>
    </div>
  );
};

export default Analysis;
