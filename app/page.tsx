import React from 'react';
import Script from 'next/script';
import Banner from './banner/Banner';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

const Page = () => {
  return (
    <>
   
        <meta charSet="utf-8" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
     
      <Header />
      <Banner />
      <Layout />
      <Footer />
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up"></span>
      </div>
      <Script src="js/jquery.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="js/jquery.fancybox.js"></Script>
      <Script src="js/wow.js"></Script>
      <Script src="js/appear.js"></Script>
      <Script src="js/jquery-ui.js"></Script>
      <Script src="js/odometer.js"></Script>
      <Script src="js/select2.min.js"></Script>
      <Script src="js/gsap.min.js"></Script>
      <Script src="js/ScrollTrigger.min.js"></Script>
      <Script src="js/splitType.js"></Script>
      <Script src="js/swipper.min.js"></Script>
      <Script src="js/owl.js"></Script>
      <Script src="js/Script.js"></Script>
    </>
  );
};

export default Page;
