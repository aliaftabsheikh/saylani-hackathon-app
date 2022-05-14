import React from "react";
import { images, desc } from "../../constants";
import Cards from "../../components/Card/Cards";
import Navbar from "../../components/Navbar/Navbar";

const ApplyCourse = () => {
  const initialDesc = {
    desc0: desc[0].desc,
    desc1: desc[1].desc,
    desc2: desc[2].desc,
    desc3: desc[3].desc,
    desc4: desc[4].desc,
    desc5: desc[5].desc,
  };
  return (
    <>
      <Navbar />
      <div className="app__home-container">
        <div className="app__home-card">
          <Cards
            imgUrl={images.Pc}
            title="Graphic Designing"
            desc={initialDesc.desc0 + "..."}
            disable={false}
            apply="Apply"
          />
        </div>
        <div className="app__home-card">
          <Cards
            imgUrl={images.CCA}
            title="CCA & CCO"
            desc={initialDesc.desc1 + "..."}
            disable={false}
            apply="Apply"
          />
        </div>
        <div className="app__home-card">
          <Cards
            imgUrl={images.Python}
            title="Python"
            desc={initialDesc.desc2 + "..."}
            disable={true}
            apply="COMING SOON..."
          />
        </div>
        <div className="app__home-card">
          <Cards
            imgUrl={images.CCNA}
            title="CCNA"
            desc={initialDesc.desc3 + "..."}
            disable={true}
            apply="COMING SOON..."
          />
        </div>
        <div className="app__home-card">
          <Cards
            imgUrl={images.CCO}
            title="CCO"
            desc={initialDesc.desc4 + "..."}
            disable={false}
            apply="Apply"
          />
        </div>
        <div className="app__home-card">
          <Cards
            imgUrl={images.SDE}
            title="Saylani Digital"
            desc={initialDesc.desc5 + "..."}
            disable={true}
            apply="COMING SOON..."
          />
        </div>
      </div>
    </>
  );
};

export default ApplyCourse;
