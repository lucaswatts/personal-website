import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div id='split' className='about'>
      <div className='left'>
      <h1>Contact.</h1>
        <br></br>
        <p>A front-end developer with experience with HTML, CSS and Javascript, specializing in the <a style={{color: '#32f9ff'}}>React</a> framework. Currently seeking a front-end position utilizing these skills. Experienced with large and complex website structures. </p>
        <br></br>
        <p style={{fontWeight: 400, color: '#fff'}}>Tech stack</p>
        <br></br>
        <p style={{ color: '#fff'}}>Front End</p>
        <br></br>
        <p style={{ color: '#fff'}}>React</p>
        <br></br>
        <p style={{ color: '#fff'}}>HTML, CSS, Javascript</p>
    </div>
    </div>
    <div className='right'>
      </div>
  </Layout>
);

export default IndexPage;
