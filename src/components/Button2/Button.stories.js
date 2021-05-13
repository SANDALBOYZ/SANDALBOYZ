import React from 'react';

import Button from '.';

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default w/ No Props',
};

export const Primary = Template.bind({});

Primary.args = {
  theme: 'primary',
  disabled: false,
  children: 'Primary (Default)',
};

Primary.parameters = {
  docs: {
    description: {
      story: 'Primary is the default theme.',
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = { theme: 'secondary', disabled: false, children: 'Secondary' };
Secondary.parameters = {
  docs: {
    description: {
      story: 'Secondary is not primary.',
    },
  },
};

export const Outline = Template.bind({});
Outline.args = { theme: 'outline', disabled: false, children: 'Outline' };

export const Disabled = Template.bind({});
Disabled.args = { theme: 'primary', disabled: true, children: 'Disabled' };

export const FullWidth = Template.bind({});
FullWidth.args = {
  theme: 'primary',
  disabled: false,
  fullWidth: true,
  children: 'Full Width',
};

export default {
  title: 'Button2',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Button2 renders its `styled-component` outside of React's `render`.",
      },
    },
  },
};
