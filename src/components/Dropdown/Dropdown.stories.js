import React from 'react';

import Dropdown from '.';

export default { title: 'Dropdown' };

export const themeDefault = () => (
  <Dropdown
    placeholder="Size"
    prefix="Size:"
    value={null}
    onChange={() => {}}
    options={[
      {
        disabled: false,
        name: '4',
        value: '4',
      },
      {
        disabled: false,
        name: '5',
        value: '5',
      },
      {
        disabled: false,
        name: '6',
        value: '6',
      },
      {
        disabled: true,
        name: '7',
        value: '7',
      },
      {
        disabled: true,
        name: '8',
        value: '8',
      },
      {
        disabled: false,
        name: '9',
        value: '9',
      },
      {
        disabled: false,
        name: '10',
        value: '10',
      },
    ]}
  />
);

export const dropUp = () => (
  <div>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>

    <br />
    <br />
    <br />
    <br />
    <br />

    <Dropdown
      dropUp
      placeholder="Size"
      prefix="Size:"
      value={null}
      onChange={() => { }}
      options={[
        {
          disabled: false,
          name: '4',
          value: '4',
        },
        {
          disabled: false,
          name: '5',
          value: '5',
        },
        {
          disabled: false,
          name: '6',
          value: '6',
        },
        {
          disabled: true,
          name: '7',
          value: '7',
        },
        {
          disabled: true,
          name: '8',
          value: '8',
        },
        {
          disabled: false,
          name: '9',
          value: '9',
        },
        {
          disabled: false,
          name: '10',
          value: '10',
        },
      ]}
    />
  </div>
);
