import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
	      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}} >
		      <MenuItem>
			      cool link
		      </MenuItem>
		      <MenuItem disabled>
			      disabled llink
		      </MenuItem>
		      <MenuItem index={123}>
			      cool link 123
		      </MenuItem>
	      </Menu>

	      <Button className="custom"> Hello </Button>
	      <Button disabled> Disabled Button </Button>
	      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
	      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
	      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank"> Baidu Link </Button>
	      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled> Disabled Link </Button>
      </header>
    </div>
  );
}

export default App;
