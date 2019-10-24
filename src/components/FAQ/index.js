import React, { Component } from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import html from 'remark-html';

import { H400 } from '@utils/type';
import * as styled from './styles';

class FAQ extends Component {
  static propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
        answer: PropTypes.string,
      })
    ).isRequired,
  };

  state = {
    open: [],
  };

  toggleOpen = idx => {
    const open = [...this.state.open];
    const currentPos = open.indexOf(idx);

    if (currentPos > -1) {
      open.splice(currentPos, 1);
    } else {
      open.push(idx);
    }

    this.setState({ open });
  };

  render() {
    const { questions } = this.props;
    const { open } = this.state;

    return (
      <styled.Wrapper>
        {questions.map((faq, idx) => (
          <styled.Button
            onClick={() => {
              this.toggleOpen(idx);
            }}
          >
            <styled.Question>
              <H400>{faq.question}</H400>
              <styled.Icon name={open.includes(idx) ? 'minus' : 'plus'} />
            </styled.Question>
            {open.includes(idx) && (
              <styled.Answer
                dangerouslySetInnerHTML={{
                  __html: remark()
                    .use(html)
                    .processSync(faq.answer)
                    .toString(),
                }}
              />
            )}
          </styled.Button>
        ))}
      </styled.Wrapper>
    );
  }
}

export default FAQ;
