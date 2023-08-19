import { Container, Content } from "./styles";

import { Header } from "../../components/Header";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1></h1>
      </Brand>

      <Header />

      <Menu>
        <ButtonText title="pedido"/>
      </Menu>

      <Search></Search>

      <Content></Content>
      <NewNotes></NewNotes>
    </Container>
  );
}
