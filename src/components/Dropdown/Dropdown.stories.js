import React from 'react';

import Dropdown from '.';

export default { title: 'Dropdown' };


const LONG_OPTIONS = [
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
  {
    disabled: false,
    name: '11',
    value: '11',
  },
  {
    disabled: false,
    name: '12',
    value: '12',
  },
  {
    disabled: false,
    name: '13',
    value: '13',
  },
  {
    disabled: false,
    name: '14',
    value: '14',
  },
  {
    disabled: false,
    name: '15',
    value: '15',
  },
];

export const ThemeDefault = () => (
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

export const Scrolled = () => (
  <Dropdown
    placeholder="Size"
    prefix="Size:"
    value={null}
    onChange={() => { }}
    options={LONG_OPTIONS}
  />
);

export const DropUp = () => (
  <div>
    <p>Content</p>
    <p>Content</p>
    <p>Content</p>
    <div style={{ height: '500px' }} />

    <Dropdown
      dropUp
      placeholder="Size"
      prefix="Size:"
      value={null}
      onChange={() => { }}
      options={LONG_OPTIONS}
    />
  </div>
);
