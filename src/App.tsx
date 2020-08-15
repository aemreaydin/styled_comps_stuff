import React from "react";
import Hero from "./components/Hero";

import "./App.css";
import vlada from "./images/vlada.jpg";
import vito from "./images/teddy_tavan.jpg";
import Banner from "./components/Banner";
import BasicInput from "./components/Input";
function App() {
  return (
    <div className="App">
      {/* <Hero image={vlada}>
        <Banner title="This is the title" />
      </Hero>
      <Hero big image={vito}>
        <Banner title="This is another title" />
      </Hero> */}
      <BasicInput padding={"1rem"} />
    </div>
  );
}

export default App;
