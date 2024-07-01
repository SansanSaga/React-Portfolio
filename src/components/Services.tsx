import { Box, Flex } from "@chakra-ui/react"
import Services_Card from "./Services_Card"

const Services = () => {
  return (
    <Box h={"420px"} bgColor={"teal"} pt={"28px"}>
        <Flex>
            <Services_Card></Services_Card>
            <Services_Card></Services_Card>
            <Services_Card></Services_Card>
            <Services_Card></Services_Card>
        </Flex>
    </Box>
  )
}

export default Services