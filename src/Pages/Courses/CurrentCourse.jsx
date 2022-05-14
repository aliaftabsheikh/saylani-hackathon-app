import React from 'react';
import { images, desc} from "../../constants";
import Cards from "../../components/Card/Cards"
import Navbar from '../../components/Navbar/Navbar';


const CurrentCourse = () => {
  const initialDesc = {
    desc0: desc[0].desc,
    desc1: desc[1].desc,
    desc4: desc[4].desc,
};
  return (
    <>
    <Navbar/>
    <h1 className="app__home-heading">Current Courses</h1>
    <div className="app__home-container">
    <div className="app__home-card">
        <Cards imgUrl={images.CCA} title="CCA & CCO" desc={initialDesc.desc1  + '...'} disable ={false} />
      </div>
      <div className="app__home-card">
        <Cards imgUrl={images.Pc} title="Graphic Designing" desc={initialDesc.desc0 + '...'}  />
      </div>
      
      
      <div className="app__home-card">
        <Cards imgUrl={images.CCO} title="CCO" desc={initialDesc.desc4  + '...'}disable ={false} />
      </div>
    </div>
    </>
  )
}

export default CurrentCourse