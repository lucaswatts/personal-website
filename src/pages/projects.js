import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className='left'>
      <h1 id='projectsTitle'>Projects.</h1>
      <div className='projectContainer'>
      <iframe id='geoGuesser' src="https://friendly-ardinghelli-55203a.netlify.app/"></iframe>
      <p className='projectDescription'>A react project that is a geographical quiz, where the user tries to match the displayed city to its respective country.</p>
      <a className='projectLink' target='_blank' href='https://friendly-ardinghelli-55203a.netlify.app/'>Click here to see the project.</a>
      </div>
    </div>
    <div className='right'>
    </div>
  </Layout>
);

export default IndexPage;
