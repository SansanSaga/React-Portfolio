import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Image,
    Box,
    Text,
    Divider,
} from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box position={"fixed"} top={"20px"} left={"12px"}>
        <Button leftIcon={<IoMenu />} colorScheme='teal' variant='solid' onClick={onOpen}>
            Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent bgColor={"teal"}>
            <DrawerCloseButton />
            <DrawerHeader>
                <Image src="/logo_purwadhika.png" maxWidth={"80%"}/>
            </DrawerHeader>
  
            <DrawerBody >
                <Divider />
                <Text textColor={"white"} fontSize={"xl"} align={"center"} fontFamily={"Poppins"}>Home</Text>
                <Text textColor={"white"} fontSize={"xl"} align={"center"} fontFamily={"Poppins"}>Profile</Text>
            </DrawerBody>
  
            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </Box>
    )
}

export default Sidebar