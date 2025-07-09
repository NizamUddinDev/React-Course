import React from 'react'
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <h1>My First React Web Page</h1>
      <Header/>
      <Section 
        serial ={1}
        fruit1 ="Mango"
        fruit2 ="Orange"
        fruit3 ="Graps"
        fruit4 ="Banana"
        fruit5 ="Water Melon"
      />

      <Section 
        serial ={2}
        fruit1 ="Date"
        fruit2 ="Melon"
        fruit3 ="Berry"
        fruit4 ="Peaches"
        fruit5 ="Apple"
      />
      <Footer />
    </>
  )
}

export default App
