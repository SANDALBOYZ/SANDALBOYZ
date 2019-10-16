import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { Body as BaseBody, H300 as BaseH300 } from '@utils/type';

const Body = styled(BaseBody)`
  color: ${colors.N0};
  line-height: 20px;
`;

export const H300 = styled(BaseH300)`
  margin-bottom: ${space[2]};
  color: ${colors.N0};
`;

export const Inner = styled.div`
  margin: auto;
  max-width: 500px;
  padding: 0 ${H_PADDING_MOBILE};

  & table {
    width: 100%;
    margin: ${space[4]} 0 ${space[1]};
    border-collapse: collapse;
    border-spacing: 0;
  }

  & td {
    text-align: left;
    padding: 10px;
    border: 1px solid ${colors.N0};
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  color: ${colors.N0};
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${props => props.open ? 1 : 0};
  pointer-events: ${props => props.open ? 'auto' : 'none'};
  transition: opacity 150ms linear;
`;

const SizeChart = ({ onClose, open }) => (
  <Modal onClick={onClose} open={open}>
    <Inner>
      <H300>Size Chart</H300>
      <Body>
        All sandals fit true to US size. Please refer to the chart below for
        international standards of measurement.
      </Body>
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
      <Body>*Measured in the middle of the sole from heel to toe.</Body>
    </Inner>
  </Modal>
);

SizeChart.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SizeChart;
