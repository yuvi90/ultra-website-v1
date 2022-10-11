import React from 'react';
// Components
import { InfoSection } from '../../components'
import { homePageData } from "./Data";

const Home = () => {
  return (
    <>
        <InfoSection {...homePageData} />
    </>
  )
}

export default Home