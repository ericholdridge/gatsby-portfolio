import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GlobalStyle from "../styles/GlobalStyles";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero/Hero";
import Tools from "../components/Tools/Tools";
import Projects from "../components/Projects/Projects";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eric Holdridge ~ Web Developer</title>
        <link rel="icon" href="http://www.yoursite.com/favicon.ico?v=2" />

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
