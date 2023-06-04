import { Button } from 'presentation/components/Button';
import { FormGroup } from 'presentation/components/Form/Group';
import { Input } from 'presentation/components/Form/Input';
import { Textarea } from 'presentation/components/Form/textarea';
import { Overlay } from 'presentation/components/Overlay';
import { Portal } from 'presentation/components/Portal';
import { Title } from 'presentation/components/Typography/Title';

import { Container, Form } from './styles';

export function CollectionModalCreate() {
  return (
    <Portal selector="create-collection-modal">
      <Overlay>
        <Container>
          <div className="header">
            <Title as="strong" size="medium">Criar coleção</Title>
          </div>

          <div className="content">
            <Form>
              <FormGroup>
                <Input placeholder="Nome" />
              </FormGroup>

              <FormGroup>
                <Textarea placeholder="Descrição (opcional)" maxLength={440} />
              </FormGroup>

              <div className="actions">
                <Button type="submit">Criar Coleção</Button>
                <Button type="reset" outline schemaColor="softGray">
                  Cancelar
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </Overlay>
    </Portal>
  );
}
