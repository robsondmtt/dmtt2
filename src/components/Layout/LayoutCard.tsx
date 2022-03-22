import { Box } from "@chakra-ui/layout"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import TituloBadge from "./TituloBadge"

interface LayoutCardProps {
  titulo?: string;
  children: React.ReactNode
}

const LayoutCard = (props: LayoutCardProps) => {
  return (
    <>
      <Box borderRadius="lg" my="2" 
        // direction={['column', 'column', 'row', 'row']} 
        border="1px" borderColor="gray" p="2">
        <Box w={'100%'}>
          <TituloBadge titulo={props.titulo} />
        </Box>

        <Box>
          {props.children}
        </Box>
      </Box>
    </>
  )
}

export default LayoutCard

