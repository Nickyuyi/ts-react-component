import React from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Button from './components/Button/btn';
import Alert from './components/Alert/alert';
import './styles/index.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus>hello</Button>
        <Button btnType="danger" size="lg">hello</Button>
        <Button btnType="link" href="http://www.baidu.com" target="_blank">hello</Button>
        <Alert title="这是标题" closable description="这是描述" onClose={() => {console.log('close.......')}} />
        <Alert title="你好" type="success" />
      </header>
    </div>
  );
}

export default App;
