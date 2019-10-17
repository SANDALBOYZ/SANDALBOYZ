import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { Container as BaseContainer, mq } from '@utils/styles';
import * as type from '@utils/type';

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: ${space[4]} !important;

  ${mq.gtlg} {
    flex-direction: row;
    margin-top: 80px;
    padding-top: ${space[7]} !important;
  }
`;

export const Emails = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.gtlg} {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${space[4]};
  text-align: center;

  ${mq.gtlg} {
    padding: 0 ${space[6]};
    text-align: left;

    &:not(:last-child) {
      border-right: 1px solid ${colors.N200};
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: ${space[4]};
  background-color: ${colors.N100};

  ${mq.gtlg} {
    width: 50%;
    background: transparent;
    border: 1px solid ${colors.N200};
  }
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: ${space[3]};

  & > :first-child {
    margin-bottom: ${space[3]};
  }

  ${mq.gtlg} {
    align-items: center;
    flex-direction: row;

    & > :first-child {
      margin-bottom: 0;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${space[3]};

  & > * {
    flex: 1;
    width: 100%;
  }

  & > *:not(:last-child) {
    margin-bottom: ${space[3]};
  }

  ${mq.gtlg} {
    flex-direction: row;

    & > *:not(:last-child) {
      margin-right: ${space[3]};
      margin-bottom: 0;
    }
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
  ${mq.gtlg} {
    margin-bottom: ${space[2]};
  }
`;

export const HelpText = styled.div`
  width: 100%;
  margin-top: ${space[4]};
  margin-bottom: ${space[6]};

  ${mq.gtlg} {
    width: 50%;
    margin-right: ${space[8]};
    margin-bottom: 0;
  }
`;

export const TalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${space[6]};
  margin-bottom: ${space[8]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    align-items: center;
    margin-top: 0;
    padding: ${space[10]} 0 ${space[4]};
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: ${space[14]};
  margin-bottom: ${space[7]};
`;
