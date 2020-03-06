import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {
    Form,
    FormGroup,
    FormInput,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Collapse,
    Button
} from "shards-react"
import "./App.css";

export default class NavExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
  
      this.state = {
        dropdownOpen: false,
        collapseOpen: false
      };
    }
  
    toggleNavbar() {
      this.setState({
        ...this.state,
        ...{
          collapseOpen: !this.state.collapseOpen
        }
      });
    }
    render() {
        return (
            <div>
                <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="#">Valorant Stats App</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse open={this.state.collapseOpen} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink active href="#">
                        Home
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" >
                        Live Game
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" >
                        Tier Lists
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="#" >
                        Strategies
                    </NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar className="ml-auto">
                    <InputGroup size="sm" seamless>
                    <InputGroupAddon type="prepend">
                        <InputGroupText>
                        </InputGroupText>
                    </InputGroupAddon>
                    <FormInput className="border-0" placeholder="Search for player..." />
                    </InputGroup>
                </Nav>
                </Collapse>
            </Navbar>
            <Form>
                <FormGroup>
                    <FormInput placeholder="Enter player name here"/>
                    <Button>Search</Button> 
                </FormGroup>
            </Form>
        </div>
    );
}
}
