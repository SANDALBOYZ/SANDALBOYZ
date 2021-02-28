import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { Container, mq } from '@utils/styles';
import { Body } from '@utils/type';

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

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const ProductDetailsContainer = styled.div`
`;

export const ProductDetailLine = styled.p`
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.LIGHT};
  font-size: 0.8rem;
  line-height: 1.2;
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
  height: 80px;
  width: 80px;
  margin-right: ${space[3]};
  background-color: ${colors.N100};
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

export const Remove = styled.button`
  border: 0;
  outline: 0;
  background: 0;
  padding: 0;
  margin: 0;
  display: inherit;
  color: #333;
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.LIGHT};
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SubtotalContainer = styled.div`
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

export const Subtotal = styled(Body)`
  font-size: 1.2rem;
`;

export const Price = styled(Body)`
  font-size: 1.3rem;
`;
