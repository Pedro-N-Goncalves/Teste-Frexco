import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function App () {
  return (
    <div className='App'>
      <Fragment>
        <AppBar position='fixed'>
          <Toolbar>
            <h1>Gigastore</h1>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Fragment>
    </div>
  );
}

export default App;
