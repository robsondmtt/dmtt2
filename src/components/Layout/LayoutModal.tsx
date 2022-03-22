import { Box } from "@chakra-ui/layout"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

interface LayoutModalProps {
  header: string
  isOpen: boolean
  onClose: () => void
  onClick: () => void
  children: React.ReactNode
}

const LayoutModal = (props: LayoutModalProps) => {
  return (
    <>
      <Modal isOpen={props.isOpen} size={"2xl"} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='gray' mr={3} onClick={props.onClose}>
              Cancelar
            </Button>
            <Button colorScheme='orange' onClick={props.onClick}>Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default LayoutModal

