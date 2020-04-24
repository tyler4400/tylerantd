import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
	      <h1>Hello world</h1>
	      <h2>Hello world</h2>
	      <h3>Hello world</h3>
	      <hr/>
	      <code>
		      const a = 'b'
	      </code>
	      <Button disabled> Hello </Button>
	      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Hello </Button>
	      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Baidu Link </Button>

	      <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
