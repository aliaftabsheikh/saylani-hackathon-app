import { useState } from "react";
import Cards from "../../components/Card/Cards";
import Navbar from "../../components/Navbar/Navbar";
// import Saylani from "../../assets/Saylani-logo.png";
// import logo from "../../assets/logo192.png";
// import Pc from "../../assets/P-c.jpg";

import { images, desc} from "../../constants";
import "./Home.scss";

const Home = () => {
  const initialDesc = {
      desc0: desc[0].desc.slice(0,100),
      desc1: desc[1].desc.slice(0,100),
      desc2: desc[2].desc.slice(0,100),
      desc3: desc[3].desc.slice(0,100),
      desc4: desc[4].desc.slice(0,100),
      desc5: desc[5].desc.slice(0,100),
  };
  return (<>
  <Navbar/>
      <h1 className="app__home-heading">Welcome to SMIT HomePage</h1>
    <div className="app__home-container">
      <div className="app__home-card">
        <Cards imgUrl={images.Pc} title="Graphic Designing" desc={initialDesc.desc0 + '...'} disable ={false} apply="Apply" />
      </div>
      <div className="app__home-card">
        <Cards imgUrl={images.CCA} title="CCA & CCO" desc={initialDesc.desc1  + '...'} disable ={false} apply="Apply"/>
      </div>
      <div className="app__home-card">
        <Cards imgUrl={images.Python} title="Python" desc={initialDesc.desc2  + '...'} disable ={true} apply="Apply"/>
      </div>
      <div className="app__home-card">
        <Cards imgUrl={images.CCNA} title="CCNA" desc={initialDesc.desc3  + '...'} disable ={true} apply="Apply"/>
      </div>
      <div className="app__home-card">
        <Cards imgUrl={images.CCO} title="CCO" desc={initialDesc.desc4  + '...'}disable ={false} apply="Apply"/>
      </div>
      <div className="app__home-card">
        <Cards imgUrl={images.SDE} title="Saylani Digital" desc={initialDesc.desc5  + '...'} disable ={true}apply="Apply"/>
      </div>
    </div>
    </>
  );
};

export default Home;
