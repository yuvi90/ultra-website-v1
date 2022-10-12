import React from 'react';
// Components
import { InfoSection } from '../../components'
import { homePageObj1 } from "./Data";

const Home = () => {
  return (
    <>
        <InfoSection {...homePageObj1} />
    </>
  )
}

export default Home