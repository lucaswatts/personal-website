import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from '../components/atomic/button';
import Download from '../icons/download.svg';

function downloadResume() {
  console.log('trying to download resume');
  window.open('../PDFs/Wine Label - Lucas.pdf');
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id='home' className='split'>
      <div className='left'>
        <h1 className='home-title'>Hello,</h1>
        <h1>I'm Lucas Watts.</h1>
        <h1>Front-End Web Developer.</h1>
        <p style={{lineHeight: '25px'}}>--- Currently working at: <a href='https://www.studiobell.ca/' target='_blank'>National Music Centre</a>.
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
        <div className='download-container'>
          <Download onClick={downloadResume} className='download' />
          <p>Click to <a href='https://doc-08-24-apps-viewer.googleusercontent.com/viewer/secure/pdf/802b8psnvms3emf7ou5f97p872irlu4h/kbhhkdog2lg2dmrvijsv273e4n1ejmr2/1624856925000/drive/18173695216242089039/ACFrOgAy-tB5gKXbN9ZlNNpHRnAIO4McrLy419GB_ZOw1WIVSb9fVnRlzxoku1GMmArSi4hzX69j5WY_szOuL1eR_PvXccvRVYUyCp8jRPTNyuoNkLQCMPkUZgKE6Wj3iYETZIvGX0HjitLtTRTv?print=true&nonce=bb4d5rboegosi&user=18173695216242089039&hash=nmtq5ag5pb1mniln42mk2oqcqra3knto'  target='_blank' download>download</a></p>
          <p>my resume.</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
