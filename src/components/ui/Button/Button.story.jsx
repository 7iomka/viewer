import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CenteringDecorator from 'storybook/decorators/CenteringDecorator';
import Button from './Button';

storiesOf('UI/Button', module)
  .addDecorator(CenteringDecorator())
  .add('Default white theme', () => <Button>Default white button</Button>)
  .add('Default white theme with anchor', () => <Button component='a' href='#'>Default white anchor</Button>)
  .add('Blue theme', () => <Button theme="blue">Primary blue button</Button>);
