import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        Dolore aute id pariatur pariatur cillum sit est nisi ex eiusmod veniam qui nostrud in. Fugiat nisi deserunt ea enim anim laboris sunt id fugiat tempor. Aliqua do aliquip labore ut.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;