// Source: https://templateskart.com/components/timeline
import { React, useState } from 'react';
import {
  Box,
  Button,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Collapse,
  Icon,
} from '@chakra-ui/react';
import { IoMdSchool as SchoolIcon, IoMdBusiness as WorkIcon } from 'react-icons/io'
import { Animated } from './Animated'

const milestones = [
  {
    date: 'Nov 2021 - Present',
    title: 'Lead Machine Learning Engineer',
    subtitle: 'BigBear.ai',
    icon: WorkIcon,
    description: [
		'Deployed machine learning models using Django REST API web server, distributed task queues, Redis caching, PostgreSQL on AWS to integrate with commercial products',
		'Optimized forecast models using time series analysis and decomposition, improving the baseline\'s mean average error by 50% and monitored performance using MLflow',
		'Trained hospital admission forecast models that predicts a week into the future with <7% MAPE to help hospitals better manage their resources',
		'Developed a feature selection pipeline in Databricks that automates the feature engineering process and integrated it to a proprietary auto-ML software ',
		'Trained an object segmentation computer vision model that detects maritime ships from satellite images using Yolov5 and Detectron2 deep neural networks with Pytorch',
    ],
    collapse: false,
  },
  {
    date: 'Mar 2019 - Nov 2021',
    title: 'Machine Learning Engineer',
    subtitle: 'Trabus Technologies',
    icon: WorkIcon,
    description: [
      'Developed a travel time model that predicts the ETA of two points on the US waterway using gradient boosting which achieved <15% MAPE, and deployed using Docker containers on AWS EC2 instances',
      'Built a GraphQL webserver for a river information system commercial application to advise mariners of ETAs, potential delays, and hazardous conditions (patent pending)',
      'Implemented a management system that allows users to oversee the work progress of their clients and auto-generates Tableau workbooks by parsing/analyzing text files using AWS S3 buckets, Django, and PostgreSQL',
      'Pioneered an EDI to exchange invoice documents between barge companies with a REST API and a full stack website to replace outdated exchange system',
      'Designed a dashboard to analyze and monitor hourly AIS data feeds to maintain data integrity and detect anomalies',
    ],
    collapse: true,
  },
  {
    date: 'Dec 2018',
    title: 'M.S. Electrical Engineering',
    subtitle: 'University of California, San Diego',
    icon: SchoolIcon,
    description: [
      'Specialty: Machine Learning and Data Science',
      'GPA: 3.6',
    ],
    collapse: false,
  },
  {
    date: 'Jun 2018 - Sep 2018',
    title: 'Platform/Machine Learning Intern',
    subtitle: 'Brain Corporation',
    icon: WorkIcon,
    description: [
      'Created point clouds visualizations to analyze the effects of LIDAR scans on glass walls',
      'Implemented a synthetic environment to model glass walls and to collect data',
      'Trained a LSTM and multilayer perceptron (MLP) to detect glass walls using Keras with 85% accuracy',
      'Developed unit tests with pytest to ensure reliability and reproducibility',
    ],
    collapse: true,
  },
  {
    date: 'Nov 2017 - Jun 2018',
    title: 'LabVIEW/Matlab Consultant',
    subtitle: 'LinOptix, LLC',
    icon: WorkIcon,
    description: [
      'Converted software to control a digital micromirror device (DMD) from C++ to LabVIEW and Matlab',
      'Synced a charged-coupled device (CCD) with a DMD to take an image at 30kHz',
      'Applied object oriented analysis and design principles to create a modular set of VIs',
    ],
    collapse: true,
  },
  {
    date: 'Jun 2017',
    title: 'B.S. Electrical Engineering',
    subtitle: 'University of California, San Diego',
    icon: SchoolIcon,
    description: [
      'Specialty: Machine Learning and Controls',
      'GPA: 3.58',
    ],
    collapse: false,
  },
];

export const Timeline = ({ accentColor }) => {

  return (
    <Container position={'relative'} maxWidth="7xl" pt={10}>
      {milestones.map((milestone, title) => (
        <Flex key={title} mb="10px">
          <LineWithDot />
          <Animated animateIn={'fadeIn'} animateOnce={true}>
            <Card {...milestone} accentColor={accentColor} />
          </Animated>
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ title, subtitle, description, collapse, date, icon, accentColor }) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  const cardColor = useColorModeValue('gray.100', 'gray.700')
  const arrowColor = useColorModeValue('gray-100', 'gray-700')

  return (
    <HStack
      p={4}
      bg={cardColor}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent var(--chakra-colors-${arrowColor}) transparent`,
        borderStyle: 'solid',
        borderWidth: '15px 15px 15px 0',
        position: 'absolute',
        left: '-15px',
        display: { base: 'none', md: 'block'}
      }}
    >
      <Box>
        <Icon as={icon}
          w={{ base: 8, md: 10}}
          h={{ base: 8, md: 10}}
          right={'1rem'}
          top={'0.5rem'}
          color={accentColor}
          position={'absolute'} />
        <Text fontSize="sm" pb={2}>
          {date}
        </Text>
        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1
            fontSize={{ base: 'l', md: '2xl'}}
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <chakra.h2
            fontSize={{ base: 'md', md: 'xl'}}
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
            pb={3}
          >
            {subtitle}
          </chakra.h2>
          {
            collapse ?
            <>
              <Collapse startingHeight={65} in={show}>
                <UnorderedList>
                {
                  description.map((item) => (
                    <ListItem
                      key={item}
                      fontSize={{ base: 'md', md: 'xl'}}
                      >{item}</ListItem>
                  ))
                }
                </UnorderedList>
              </Collapse>
              <Button size='sm' onClick={handleToggle}  variant='ghost'>
                Show {show ? 'Less' : 'More'}
              </Button>
            </> :
              <UnorderedList style={{marginInlineStart: '1em'}}>
              {
                description.map((item) => (
                  <ListItem
                    key={item}
                    fontSize={{ base: 'md', md: 'xl'}}
                    >{item}</ListItem>
                ))
              }
              </UnorderedList>
          }
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  const borderAccentColor = useColorModeValue('blue.300', 'gray.600');
  const backgroundColor = useColorModeValue('blue.50', 'gray.600');

  return (
    <Flex pos="relative" alignItems="center" mr="40px" display={{base: 'none', md: 'flex'}}>
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Animated animateIn={'slideInDown'} animateOnce={true} offset={20}>
        <Box pos="relative" p="10px">
          <Box
            pos="absolute"
            width="100%"
            height="100%"
            bottom="0"
            right="0"
            top="0"
            left="0"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            backgroundColor={backgroundColor}
            borderRadius="100px"
            border="3px solid"
            borderColor={borderAccentColor}
            backgroundImage="none"
            opacity={1}
          ></Box>
        </Box>
      </Animated>
    </Flex>
  );
};
