import React from "react";
import Cards from "../../components/Card/Cards";
// import Saylani from "../../assets/Saylani-logo.png";
// import logo from "../../assets/logo192.png";
// import Pc from "../../assets/P-c.jpg";

import { images, desc } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <div className="app__home-container">
      <div className="app__home-card">
        <Cards
          imgUrl={images.Pc}
          title="Saylani"
          desc={desc[0].desc}
        />
      </div>
      <div className="app__home-card">
    <Cards
        imgUrl={images.logo}
        title="React"
        desc={desc[1].desc}
      />
    </div>
    <div className="app__home-card">
      <Cards
        imgUrl={images.logo}
        title="React"
        desc={desc[2].desc}
      />
      </div>
    <div className="app__home-card">
    <Cards
        imgUrl={images.CCNA}
        title="React"
        desc={desc[3].desc}
      />
    </div>
    <div className="app__home-card">
    <Cards
        imgUrl={images.CCA}
        title="React"
        desc={desc[4].desc.slice(0, 100)}
      />
    </div>
    <div className="app__home-card">
    <Cards
        imgUrl={images.Pc}
        title="React"
        desc={desc[5].desc}
      />
    </div>
    </div>
  );
};

export default Home;
