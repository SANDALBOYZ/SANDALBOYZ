import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

import colors, { randomSandalboyzColor } from '@utils/colors';
import { H100 as BaseH100, H200 as BaseH200, H300 as BaseH300 } from '@utils/type';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';

const SectionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
  margin-bottom: ${space[8]};

  ${mq.gtlg} {
    flex-direction: row;

    & > div:first-child {
      margin-right: ${space[5]};
    }
  }
`;

// Just a background piece
const StickyWrapper = styled.div`
  align-self: stretch;
  background-color: ${colors.SANDALBOYZ_OLIVE};
  margin-bottom: ${space[6]};

  ${mq.gtlg} {
    width: 36%;
    margin-bottom: ${space[10]};
  }
`;

// Includes header and content
const StickySection = styled.div`
  position: sticky;
  top: 0;
  padding: 30px;
  padding-bottom: 40px;
`;

const ScrollSection = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mq.gtlg} {
    width: 64%;
  }
`;

const SectionTile = styled.div`
  margin-bottom: 30px;

  ${mq.gtlg} {
    width: calc(50% - 30px);
    &:nth-child(odd) {
      margin-right: 30px;
    }
  }
`;

const TileImage = styled(Image)`
`;

const H100 = styled(BaseH100)`
  margin-bottom: ${space[6]};
`;

const H200 = styled(BaseH200)`
  margin-bottom: ${space[4]};
`;

const H300 = styled(BaseH300)`
  margin-bottom: ${space[4]};
`;

export const About = ({ title }) => (
  <>
    <H100>{title}</H100>

    <SectionContainer>
      <StickyWrapper>
        <StickySection>
          <H200>Rooted in Good</H200>
          <p>
            Bacon ipsum dolor amet tail landjaeger flank, pork kevin short ribs
            porchetta chuck doner pig. Andouille tenderloin cow short ribs beef
            bacon.
          </p>
        </StickySection>
      </StickyWrapper>
      <ScrollSection>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
      </ScrollSection>
    </SectionContainer>

    <SectionContainer reverse>
      <ScrollSection>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
        <SectionTile>
          <TileImage
            fluid={{
              src: 'https://source.unsplash.com/random/512x512',
              srcSet: 'https://source.unsplash.com/random/512x512 512w',
              sizes: '(max-width: 512px) 100vw, 512px',
              aspectRatio: 1,
            }}
          />
          <H300>Header2</H300>
          <p>
            Frankfurter chicken beef, pancetta brisket venison alcatra pork loin
            pork chop salami pig buffalo pork belly. Jowl pastrami brisket,
            landjaeger picanha bresaola tri-tip short ribs. Turkey buffalo tail
            landjaeger. Venison frankfurter beef, meatball kielbasa bresaola
            landjaeger ground round tri-tip flank chislic picanha. Drumstick
            ribeye pig meatloaf pastrami short ribs beef ribs ham hock boudin
            doner meatball t-bone. Shoulder kielbasa biltong venison tail cupim
            shankle landjaeger pastrami. Flank pork short ribs, chicken filet
            mignon shoulder biltong. Hamburger meatball kielbasa sausage short
            loin. Pork chop kevin beef ribs pastrami, kielbasa drumstick alcatra
            shankle. Drumstick short loin tail alcatra, biltong cupim kielbasa
            pastrami landjaeger. Jowl kielbasa sausage pastrami cow t-bone,
            flank capicola landjaeger tenderloin prosciutto spare ribs jerky
            cupim. Pastrami leberkas shoulder, tongue alcatra andouille meatball
            ham hock doner jowl pork chop spare ribs chislic sirloin capicola.
            Prosciutto andouille tongue brisket sirloin short ribs tail bacon
            jowl flank t-bone cupim beef ribs kielbasa. Pastrami ribeye bresaola
            beef ribs hamburger, leberkas burgdoggen turkey ball tip. Salami
            kevin leberkas biltong spare ribs, brisket landjaeger boudin sirloin
            prosciutto picanha. Kielbasa buffalo short loin bresaola pork loin.
          </p>
        </SectionTile>
      </ScrollSection>
      <StickyWrapper>
        <StickySection>
          <H200>Rooted in Good</H200>
          <p>
            Bacon ipsum dolor amet tail landjaeger flank, pork kevin short ribs
            porchetta chuck doner pig. Andouille tenderloin cow short ribs beef
            bacon.
          </p>
        </StickySection>
      </StickyWrapper>
    </SectionContainer>
  </>
);

export default About;
