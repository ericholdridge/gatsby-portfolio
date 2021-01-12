import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GlobalStyle from "../styles/GlobalStyles";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero/Hero";
import Tools from "../components/Tools/Tools";
import Projects from "../components/Projects/Projects";
import { graphql } from "gatsby";
import Contact from "../components/Contact/Contact";

const IndexPage = ({ data }) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eric Holdridge ~ Web Developer</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Tools />
      <Projects data={data} />
      <Contact />
    </main>
  );
};

export const query = graphql`
  query {
    allSanityProjects {
      nodes {
        projectTitle
        projectDesc
        projectPreview {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        projectTech
        projectUrl
        projectGithubUrl
      }
    }
  }
`;

export default IndexPage;
