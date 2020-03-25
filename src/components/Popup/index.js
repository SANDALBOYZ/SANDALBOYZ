import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import qs from 'querystringify';
import Cookies from 'js-cookie';
import remark from 'remark';
import html from 'remark-html';

import { AbsoluteImg } from '@utils/styles';
import { ContentLabel } from '@utils/type';
import Icon from '@components/Icon';
import * as styled from './styles';

class Popup extends Component {
  static propTypes = {
    enabled: PropTypes.bool,
    contentDigest: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    expires: PropTypes.number,
    image: PropTypes.object,
    label: PropTypes.string,
    siteUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    open: false,
  };

  componentDidMount() {
    this.handlePopup();
  }

  handleClick = evt => {
    evt.stopPropagation();
  };

  handleClose = () => {
    const { contentDigest, expires } = this.props;

    this.setState({ open: false });

    Cookies.set('_sb_popstate', contentDigest, {
      expires,
    });
  };

  handlePopup = () => {
    const { contentDigest } = this.props;

    if (Cookies.get('_sb_popstate') !== contentDigest) {
      this.setState({ open: true });
    }
  };

  render() {
    const { enabled, description, image, label, siteUrl, title } = this.props;
    const { open } = this.state;

    if (!enabled) {
      return null;
    }

    return (
      <styled.PopupWrapper open={open} onClick={this.handleClose}>
        <styled.Modal open={open} onClick={this.handleClick}>
          <styled.Button onClick={this.handleClose}>
            <Icon name="x" />
          </styled.Button>
          <styled.Content>
            <div>
              <ContentLabel>{label}</ContentLabel>
              <styled.Title>{title}</styled.Title>
              <styled.Description dangerouslySetInnerHTML={{
                __html: remark()
                  .use(html)
                  .processSync(description)
                  .toString(),
              }}/>
              {/* <styled.Social>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?${qs.stringify(
                    {
                      u: `${siteUrl}/products`,
                    }
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <styled.Icon name="facebook" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?${qs.stringify({
                    url: `${siteUrl}/products`,
                    text: title,
                  })}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <styled.Icon name="twitter" />
                </a>
              </styled.Social> */}
            </div>
          </styled.Content>
          <styled.Image>{image && <AbsoluteImg fluid={image} />}</styled.Image>
        </styled.Modal>
      </styled.PopupWrapper>
    );
  }
}

export default Popup;
