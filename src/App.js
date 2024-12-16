import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Container from './Components/Container';
import Header from './Components/header';
import Hero from './Components/Hero';
import Webinar from './Components/webinar';
import Pricing from './Components/Pricing';
import Footer from './Components/footer';


// function CreateEmoji(emojiPedia){
//   return <Card name = {emojiPedia.name}
//   title = {emojiPedia.title}
//   meaning = {emojiPedia.meaning}
//   />
// }


function App() {
  

  return (
    <div className="">
    
      <Header />
      
      <Hero />
      <h1 className='text-center text-3xl font-bold'>Upcoming Webinar:</h1>
      <Webinar />
      <h1 className='text-center text-3xl font-bold'>Explore Our Learning Paths:</h1>
      <Container />
      <Pricing />
      <Footer />

    </div>
  );
}

export default App;
