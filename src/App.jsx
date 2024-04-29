import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-cover bg-no-repeat bg-center'>
      <div className="relative z-0">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
          </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;