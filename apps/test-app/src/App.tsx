import './index.css'
import { Button, Dialog } from '@nation-a/ui'
import { CloseOutlineIcon } from '@nation-a/icons'
import { Box } from '@styled-system/jsx'
import { Avatar, Button as ChakraButton, Text as ChakraText } from '@nation-a/ui-ch'
function App() {
  return (
    <Box display={'flex'} flexWrap={'wrap'} gap={4} width={'50%'} animation={'collapse-in'} p={4}>
      <ChakraButton size="lg" color="neuroid_primary">
        asd
      </ChakraButton>
      <Avatar />
      <ChakraText textStyle={''}>asd</ChakraText>
      <ChakraText textStyle={'label.md'}>asd</ChakraText>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
              <Button aria-label="Close Dialog" variant="light" size="sm">
                <CloseOutlineIcon color="black" />
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Box>
  )
}

export default App
