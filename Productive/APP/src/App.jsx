import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Context from "./Components/Context";
import App_feature from "./Components/App_features";
import Steps_section from "./Components/Steps_section";
import Testimonials from "./Components/Testimonials";
import Signup_section from "./Components/Signup_section";
import Footer from "./Components/Footer";

export default function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Context/>
    <App_feature/>
    <Steps_section/>
    <Testimonials/>
    <Signup_section/>
    <Footer/>
    </>
  )
}