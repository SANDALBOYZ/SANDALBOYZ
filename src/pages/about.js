import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
`;

const SectionContainer = styled.section`
  position: relative;
  display: flex;
`;

const StickySection = styled.div`
  position: sticky;
  top: calc(80px + 24px);
`;

const ScrollSection = styled.div`
`;

const About = () => (
  <div>
    <StickySection>

    </StickySection>
    <ScrollSection>

    </ScrollSection>
  </div>
);

export default About;
