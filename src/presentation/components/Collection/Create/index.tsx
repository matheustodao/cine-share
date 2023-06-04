import { Button } from 'presentation/components/Button';
import { FormGroup } from 'presentation/components/Form/Group';
import { Input } from 'presentation/components/Form/Input';
import { Textarea } from 'presentation/components/Form/textarea';
import { Overlay } from 'presentation/components/Overlay';
import { Portal } from 'presentation/components/Portal';
import { Title } from 'presentation/components/Typography/Title';

import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'phosphor-react';
import { SchemaCreateCollection, validationSchemaCreateCollection } from 'presentation/validations/collection/create';
import { useForm } from 'react-hook-form';
import { Container, Form } from './styles';

export function CollectionModalCreate() {
  const { register, formState: { isValid, errors } } = useForm<SchemaCreateCollection>({
    resolver: zodResolver(validationSchemaCreateCollection),
    mode: 'onBlur',
  });

  return (
    <Portal selector="create-collection-modal">
      <Overlay>
        <Container>
          <div className="header">
            <Title as="strong" size="medium">Criar coleção</Title>
            <button type="button">
              <X />
            </button>
          </div>

          <div className="content">
            <Form>
              <FormGroup errorMessage={errors?.name?.message}>
                <Input placeholder="Nome" {...register('name')} />
              </FormGroup>

              <FormGroup errorMessage={errors?.description?.message}>
                <Textarea placeholder="Descrição (opcional)" {...register('description')} />
              </FormGroup>

              <div className="actions">
                <Button type="submit" disabled={!isValid}>
                  Criar Coleção
                </Button>

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
