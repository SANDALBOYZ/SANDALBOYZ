import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import * as type from '@utils/type';

export const Body = styled(type.Body)`
  margin-bottom: ${space[5]};
  color: ${colors.N500};
`;

export const H400 = styled(type.H400)`
  margin-bottom: ${space[0]};
`;

export const H500 = styled(type.H500)`
  margin-bottom: ${space[0]};
`;

export const Image = styled.div`
  width: 300px;
  background-color: ${colors.N100};
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
`;

export const Info = styled.div`
  flex: 1;
  padding: ${space[6]};
`;

export const Wrapper = styled.div`
  display: flex;
  height: 300px;
`;
