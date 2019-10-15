import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { Container as BaseContainer } from '@utils/styles';
import * as type from '@utils/type';

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  padding-top: ${space[7]} !important;
`;

export const Emails = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 ${space[6]};

  &:not(:last-child) {
    border-right: 1px solid ${colors.N200};
  }
`;

export const Form = styled.form`
  width: 50%;
  padding: ${space[4]};
  border: 1px solid ${colors.N200};
`;

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${space[3]};
`;

export const FormGroup = styled.div`
  display: flex;
  margin-bottom: ${space[3]};

  & > * {
    flex: 1;
  }

  & > *:not(:last-child) {
    margin-right: ${space[3]};
  }
`;

export const H200 = styled(type.H200)`
  margin-bottom: ${space[3]};
`;

export const H300 = styled(type.H300)`
  margin-bottom: ${space[4]};
`;

export const H400 = styled(type.H400)`
  margin-bottom: ${space[3]};
`;

export const H600 = styled(type.H600)`
  margin-bottom: ${space[2]};
`;

export const HelpText = styled.div`
  width: 50%;
  margin-top: ${space[4]};
  margin-right: ${space[8]};
`;

export const TalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${space[10]} 0 ${space[4]};
  text-align: center;
`;

export const TextWrapper = styled.div`
  width: ${space[14]};
  margin-bottom: ${space[7]};
`;
