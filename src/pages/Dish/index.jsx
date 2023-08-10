import { Container } from "./styles";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button";

export function Dish () {
  
  return (
    <Container>
      <Header />

      <Button title="Editar prato"/>
    </Container>
  );
}