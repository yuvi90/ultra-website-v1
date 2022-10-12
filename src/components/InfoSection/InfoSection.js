import React from 'react'
import { Link } from "react-router-dom";
import { InfoSec, InfoColumn, InfoRow, TextWrapper, TopLine, HeadLine, SubTitle, ImgWrapper, Img } from './InfoSectionElements'
import { Container, Button } from '../../styles/GlobalStyles'

const InfoSection = ({ lightBG, imgStart, img, alt, start, lightTopLine, topline, lightText, headline, lightTextDesc, desc, btnText, primary }) => {

  return (
    <InfoSec lightBG={lightBG}>
      <Container>
        <InfoRow imgStart={imgStart}>
          
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
              <HeadLine lightText={lightText}>{headline}</HeadLine>
              <SubTitle lightTextDesc={lightTextDesc}>{desc}</SubTitle>
              <Link to='/sign-up'>
                <Button big fontBig primary={primary}>{btnText}</Button>
              </Link>
            </TextWrapper>
          </InfoColumn>

          <InfoColumn>
            <ImgWrapper imgStart={imgStart} start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>  

        </InfoRow>
      </Container>
    </InfoSec>
  )
}

export default InfoSection;