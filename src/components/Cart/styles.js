import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { Container, mq } from '@utils/styles';
import { Body } from '@utils/type';

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

export const CartContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  overflow-y: scroll;
  max-height: calc(100% - 150px);
`;

export const H3 = styled.h3`
  font-family: ${fonts.GRANVILLE};
  font-weight: ${weights.REGULAR};
  font-size: 1.4rem;
  margin-bottom: ${space[3]};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #333;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${H_PADDING_MOBILE};
  background-color: ${colors.WINTER_WHITE};
`;

export const CheckoutText = styled(Body)`
  align-self: flex-start;
  margin-bottom: ${space[2]};
  font-size: 11px;
`;

export const SubtotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${space[2]};
`;

export const Subtotal = styled(Body)`
  font-weight: ${weights.REGULAR};
  font-size: 1.1rem;
`;

export const Price = styled(Body)`
  font-weight: ${weights.REGULAR};
  font-size: 1.3rem;
`;
