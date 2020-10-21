import { html } from 'lit-html';
// import markdown from './readme.md';

// const costumEvents = ['clicked'];
// const events = ['mouseover', 'click', ...eventHandles(costumEvents)];

const args = {
  modifier: '',
  first: 'First',
  middle: 'Middle',
  last: 'Last',
  hex: '#fba308',
  boolean: false,
  radio: '',
  select: '',
};
// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  modifier: {
    control: {
      type: 'select',
      options: ['', 'modified'],
    },
  },
  first: {
    description: 'The first name',
  },
  middle: {
    description: 'The middle name',
  },
  last: {
    description: 'The last name',
  },
  hex: {
    control: 'color',
  },
  radio: {
    control: {
      type: 'inline-radio',
      options: ['loading', 'error', 'ready'],
    },
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/My Component',
  component: 'my-component',
  parameters: {

  },
};

const Template = (
  {
    first,
    middle,
    last,
    hex,
  }) => html`
  <my-component
    first="${first}"
    middle="${middle}"
    last="${last}">
  </my-component>
`;

export const Default = Template.bind({});

Default.args = {...args};
Default.argTypes = {...argTypes};

export const Modified = Template.bind({});
Modified.args = {...args, modifier: 'modified'};
Modified.argTypes = {...argTypes};
