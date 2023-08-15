import { Container } from "./styles";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Dish () {
  
  return (
    <Container>
      <Header />

    
          <ButtonText title="excluir nota" />

          <Section>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </Section>

          <Section>
            <Tag title="express" />
          </Section>
          <Button  title="Editar prato"/>
      

    </Container>
  );
}