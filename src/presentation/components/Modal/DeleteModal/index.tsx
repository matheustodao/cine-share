import { X } from 'phosphor-react';
import { Button } from 'presentation/components/Button';
import { Overlay } from 'presentation/components/Overlay';
import { Portal } from 'presentation/components/Portal';
import { Title } from 'presentation/components/Typography/Title';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { DeleteModalProps } from 'types/presentation/modal';
import { Container } from './styles';

export function DeleteModal({
  title, loading, onClick, onClose, visible,
}: DeleteModalProps) {
  const elementRef = useDetectClickOutside({ onTriggered: onClose });

  if (!visible) {
    return null;
  }
  return (
    <Portal selector="delete-modal">
      <Overlay>
        <Container ref={elementRef}>
          <div className="header">
            <Title as="strong" size="large">{title}</Title>
            <button type="button" onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="actions">
            <Button type="reset" onClick={onClose}>
              Cancelar
            </Button>

            <Button onClick={onClick} outline schemaColor="softGray" loading={loading}>
              Deletar
            </Button>
          </div>
        </Container>
      </Overlay>
    </Portal>
  );
}
