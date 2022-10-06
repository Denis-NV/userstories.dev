import React from 'react';

import { Button } from '@ustrs/utils';

const App = (): JSX.Element => (
  <div>
    App
    <Button onClick={() => console.log('clicked')}>Click me</Button>
  </div>
);

export default App;
