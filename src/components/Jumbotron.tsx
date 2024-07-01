import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"

const Jumbotron = () => {
  return (
    <Box bg={"#5F9EA0"} h={"768px"}>
        <Grid
          h='768px'
          templateRows={'repeat(2, 1fr)'}
          templateColumns={'repeat(6, 1fr)'}
          alignItems={"center"}
          padding={"12px"}
          gridGap={"12px"}
        >
          <GridItem rowSpan={2} colSpan={3} >
            <Text>Placeholder_Image</Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <Text fontSize={"22px"} fontStyle={"italic"} textIndent={"24px"}>With expertise in various established frameworks and technologies, 
              we believe we can provide you the best web design and 
              development solutions for all your needs</Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <Flex wrap={"wrap"} alignItems={"center"} justifyContent={"center"} gap={4}>
                <Image src="/128px-HTML5_logo_and_wordmark.svg.png" maxH={"96px"} maxW={"96px"}/>
                <Image src="/128px-CSS3_logo_and_wordmark.svg.png" maxH={"96px"} maxW={"96px"}/>
                <Image src="/128px-Unofficial_JavaScript_logo_2.svg.png" maxH={"96px"} maxW={"96px"}/>
                <Image src="/128px-Typescript_logo_2020.svg.png" maxH={"96px"} maxW={"96px"}/>
                <Image src="/128px-React-icon.svg.png" maxH={"96px"} maxW={"96px"}/>
                <Image src="/128px-Bootstrap_logo.svg.png" maxH={"96px"} maxW={"96px"}/>
                <Image src="/128px-Tailwind_CSS_Logo.svg.png" maxH={"96px"} maxW={"96px"}/>
                <Image src="/chakra icon.png" maxH={"96px"} maxW={"96px"}/>
            </Flex>
          </GridItem>
        </Grid>
    </Box>
  )
}

export default Jumbotron