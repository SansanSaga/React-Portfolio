import { Container, Image } from "@chakra-ui/react"

const Services_Card = () => {
  return (
    <Container bgColor={"white"} h={"360px"} w={"256px"} textAlign={"center"} p={"0"}>
        <Container w={"256px"} h={"180px"}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione deserunt harum delectus? </Container>
        <Container w={"256px"} h={"180px"}>
            <Image src="" alt="cardplacehold.img"/>
        </Container>
    </Container>
  )
}

export default Services_Card