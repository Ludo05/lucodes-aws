import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Template from '../components/Template'
import { useRouter } from 'next/router'

import CardOnCard from '../components/CardOnCard';
import { Flex } from '../components/styles/flex.styled';
import { Update } from '../components/update';
import { Ideas } from '../components/Ideas';
import { Container } from '../components/styles/container.styled';
import { Span } from '../components/styles/container.styled';
import { Button } from '../components/styles/button.styled';
import { IdeasGrid } from '../components/styles/long-card.styled';
import { service_types } from '../data';
import { paths } from '../constants/paths'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const router = useRouter()

    return (
   <Template upperColour>
       <Container>
           <Flex>
               <div>
                   <h1>
                       Discover your North <Span>Star</Span>
                   </h1>
                   <p>
                       Understanding your business needs is at the forefront of our collaborative planning, guiding you to make
                       impactful decisions in result putting out the right application for your clients.
                   </p>
                   <Button primary shine onClick={() => router.push(paths.CASE_STUDIES)}>
                       Learn More
                   </Button>
               </div>
               <CardOnCard />
           </Flex>
       </Container>
       <Container>
           <h1 style={{ textAlign: 'center' }}>Believe and Scale.</h1>
           <p style={{ textAlign: 'center' }}>Services we offer</p>
           <IdeasGrid>
               {service_types.map((service: any) => {
                   return (
                       <Ideas key={service.title} summary={service.summary} title={service.title} picture={service.picture} />
                   );
               })}
           </IdeasGrid>
       </Container>
       <Container>
           <h1 style={{ textAlign: 'center', paddingBottom: '1rem' }}>
               <Span>News</Span>
           </h1>
           {/*<BlogCardGripWrapper>*/}
           {/*  {news.data?.news.map((datastream: INews) => {*/}
           {/*    return (*/}
           {/*      <BlogCard*/}
           {/*        title={datastream.title}*/}
           {/*        body={datastream.snippet}*/}
           {/*        img={datastream.imageurl}*/}
           {/*        publish_date={new Date(datastream.publishedat).toUTCString()}*/}
           {/*        url={datastream.url}*/}
           {/*      />*/}
           {/*    );*/}
           {/*  })}*/}
           {/*</BlogCardGripWrapper>*/}
       </Container>
       <Container>
           <Update />
       </Container>
   </Template>
  )
}
