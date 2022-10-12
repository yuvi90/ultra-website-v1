// Dependencies
import React from 'react';
// Components
import { homePageObj1, homePageObj2 } from "./Data";
import { Section } from '../../components'

//----------------------------------------------------------------

const Home = () => {
  return (
    <>
        <Section {...homePageObj1} />
        <Section {...homePageObj2} />
    </>
  )
}

export default Home