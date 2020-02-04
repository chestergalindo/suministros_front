import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NoFound} />
        </Switch>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
