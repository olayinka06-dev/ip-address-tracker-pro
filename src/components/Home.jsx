import React from 'react'
import styled from 'styled-components';
import About from './About'
import Contact from './Contact';
import Hero from './Hero';
import Navigation2 from './Navigation2';
import Services from './Services';


const Home = () => {
  return (
      <Wrapper>
        <Navigation2 />
        <main>
          <Hero/>
          <About />
          <Services/>
          <Contact/>
        </main>
      </Wrapper>
  )
}

const Wrapper = styled.div`




`

export default Home;

// import React from 'react';
// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Services />
//       <Contact />
//     </div>
//   );
// };

// export default App;
