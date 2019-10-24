import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { Container, mq } from '@utils/styles';
import { H300 as BaseH300, H500 as BaseH500 } from '@utils/type';

export const Actions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  & > input {
    width: auto;
  }
`;

export const Empty = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  text-align: center;

  ${mq.gtmd} {
    padding: 0;
  }
`;

export const H300 = styled(BaseH300)`
  margin-bottom: ${space[3]};
`;

export const H500 = styled(BaseH500)`
  display: flex;
  justify-content: space-between;
  line-height: 18px;

  & span:last-child {
    white-space: nowrap;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Image = styled.img`
  height: 64px;
  margin-bottom: ${space[4]};
`;

export const LineItem = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${space[3]};
  }
`;

export const LineItemImage = styled.div`
  height: 70px;
  width: 70px;
  margin-right: ${space[3]};
  background-color: ${colors.N100};
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

export const Remove = styled.a`
  color: ${colors.NEGATIVE};
  font-family: ${fonts.CONDENSED};
  font-weight: ${weights.BOLD};
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: ${space[3]};
  }
`;

export const Subtotal = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  right: ${H_PADDING_MOBILE};
  bottom: calc(${H_PADDING_MOBILE} + 90px + ${space[5]});
  left: ${H_PADDING_MOBILE};

  & > * {
    line-height: 1;
  }

  ${mq.gtlg} {
    right: ${space[5]};
    bottom: calc(${space[5]} + 50px + ${space[5]});
    left: ${space[5]};
  }
`;
