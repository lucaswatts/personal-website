import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from '../components/atomic/button';
import Caution from '../icons/warning.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id='home' className='split'>
      <div className='left'>
        <h1 className='home-title'>Hello,</h1>
        <h1>I'm Lucas Watts.</h1>
        <h1>Front-End Web Developer.</h1>
        <p style={{lineHeight: '25px'}}>--- Currently working at: <a href='https://transparentkitchen.com'>National Music Centre</a>.
          <br></br>
          --- Using 
          <span style={{color: '#2cff44'}}> HTML</span>
          ,
          <span style={{color: '#2cc0ff'}}> CSS</span>
          , and 
          <span style={{color: '#32f9ff'}}> Javascript </span>
            on a daily basis.
        </p>
        <Button text='CONTACT ME'></Button>
      </div>
      <div className='right'>
        <div className='caution-container'>
          <Caution className='caution' />
          <p>Click to download</p>
          <p>my resume :)</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
