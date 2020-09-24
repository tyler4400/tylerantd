import React from 'react';
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
	      <h1>Menu</h1>
	      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}}>
		      <MenuItem>
			      cool link
		      </MenuItem>
		      <MenuItem disabled>
			      cool link 2
		      </MenuItem>
		      <SubMenu title="dropdown">
			      <MenuItem>
				      dropdown 1
			      </MenuItem>
			      <MenuItem>
				      dropdown 2
			      </MenuItem>
		      </SubMenu>
		      <MenuItem>
			      cool link 3
		      </MenuItem>
	      </Menu>
	      <Menu defaultIndex={0} onSelect={(index) => {alert(index)}} mode="vertical">
		      <MenuItem>
			      cool link
		      </MenuItem>
		      <MenuItem disabled>
			      cool link 2
		      </MenuItem>
		      <SubMenu title="dropdown">
			      <MenuItem>
				      dropdown 1
			      </MenuItem>
			      <MenuItem>
				      dropdown 2
			      </MenuItem>
		      </SubMenu>
		      <MenuItem>
			      cool link 3
		      </MenuItem>
	      </Menu>

	      <h1>Button</h1>
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
