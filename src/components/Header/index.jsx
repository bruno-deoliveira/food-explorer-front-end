import { FiMenu, FiLogOut } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Container, Menu, Brand, Logout } from "./styles";

import { Search } from "../Search";
import { Button } from "../Button"; 

import brand from "../../assets/brand.svg";
import brandAdmin from "../../assets/brand-admin.svg";
import brandMobile from "../../assets/brand-mobile.svg";

export function Header (){
  return (
    <Container>
      <Menu>
        <FiMenu className="fi-menu-icon" />
        <MdClose />
        <span>Menu</span>
      </Menu>
      <Brand>
        <img src="../../../src/assets/brand.svg" alt="logo" />
      </Brand>
      <Search />
      <Button title="Editar prato" icon={FiMenu} />
      <Logout>
        <FiLogOut />
      </Logout>
    </Container>
  );
}