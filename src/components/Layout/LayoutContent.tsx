import { Box } from "@chakra-ui/layout"



export default function LayoutContent({ children }) {
    return (
      <>
        <Box w="full" minH="100vh">
            <Box mx={[8, 8, 10, 18]}  borderRadius={'md'} py="2" mt="2">
                {children}
            </Box>
        </Box>
      </>
    )
  }