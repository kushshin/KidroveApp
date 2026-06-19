import { useState } from 'react'
// import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import WorkShopDetails from './Components/WorkShopDetails'
import LearningOutComes from './Components/LearningOutComes'
import FAQs from './Components/FAQs'
import RegistrationForm from './Components/RegistrationForm'
import Footer from './Components/Footer'
import Accordion from './Components/Accordion'
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
  <>
  {/* <Accordion/> */}
   <Navbar/>
   <Hero/>
   <WorkShopDetails/>
   <LearningOutComes/>
   <FAQs/>
   <RegistrationForm/>
   <Footer/>
   <Toaster/>
  </>
  )
}

export default App
