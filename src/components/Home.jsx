import React from 'react'
import styled from 'styled-components';
import About from './About'
import Contact from './Contact';
import Hero from './Hero';
import Navigation from './Navigation';
import Services from './Services';


const Home = () => {
  return (
      <div>
        <Navigation />
        <main>
          <Hero/>
          <About />
          {/* <Services/>
          <Contact/> */}
        </main>
      </div>
  )
}

const Wrapper = styled.div`

  @media (min-width: 992px) {
  main {
    padding-left: 160px;
  }
  }


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
