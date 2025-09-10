import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import preview from './preview';

// Wrap all stories in React.StrictMode
export const decorators: Decorator[] = [
  (Story) => (
    <React.StrictMode>
      <Story />
    </React.StrictMode>
  ),
];

export * from './preview';
export default preview;
