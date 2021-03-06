import React, { useState } from 'react';
import Video from '../../videos/video1.mp4';
import { Button } from "../ButtonElements";
import { HeroContainer, HeroBg, VideoBg, HeroContent,
        HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src = { Video } type = 'video1/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to My Personal Website</HeroH1>
        <HeroP>
          This is Eddie Lee, thanks for visiting<br/>
          Please take a time to look around!
        </HeroP>
        <HeroBtnWrapper>
          <Button to ="about"
          onMouseEnter = { onHover }
          onMouseLeave = { onHover }
          primary = "true"
          dark = "true"
          smooth = { true }
          duration = { 500 }
          spy = { true }
          exact = 'true'
          offset= { -80 }
          >
          Get started { hover ? <ArrowForward /> : <ArrowRight /> }
        </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
