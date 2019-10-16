import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import * as styled from './styles';

class SizeChart extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        disableBodyScroll();
      } else {
        enableBodyScroll();
      }
    }
  }

  render() {
    const { onClose, open } = this.props;

    return (
      <styled.Modal onClick={onClose} open={open}>
        <styled.Inner>
          <styled.H300>Size Chart</styled.H300>
          <styled.Body>
            All sandals fit true to US size. Please refer to the chart below for
            international standards of measurement.
          </styled.Body>
          <table width="100%">
            <tbody>
              <tr>
                <td>US</td>
                <td>UK</td>
                <td>EU</td>
                <td>CM*</td>
              </tr>
              <tr>
                <td>6</td>
                <td>5.5</td>
                <td>40</td>
                <td>24</td>
              </tr>
              <tr>
                <td>7</td>
                <td>6.5</td>
                <td>41</td>
                <td>25</td>
              </tr>
              <tr>
                <td>8</td>
                <td>7.5</td>
                <td>42</td>
                <td>26</td>
              </tr>
              <tr>
                <td>9</td>
                <td>8.5</td>
                <td>43</td>
                <td>27</td>
              </tr>
              <tr>
                <td>10</td>
                <td>9.5</td>
                <td>44</td>
                <td>28</td>
              </tr>
              <tr>
                <td>11</td>
                <td>10.5</td>
                <td>45</td>
                <td>29</td>
              </tr>
              <tr>
                <td>12</td>
                <td>11.5</td>
                <td>46</td>
                <td>30</td>
              </tr>
              <tr>
                <td>13</td>
                <td>12.5</td>
                <td>47</td>
                <td>31</td>
              </tr>
            </tbody>
          </table>
          <styled.Body>
            *Measured in the middle of the sole from heel to toe.
          </styled.Body>
        </styled.Inner>
      </styled.Modal>
    );
  }
}

export default SizeChart;
