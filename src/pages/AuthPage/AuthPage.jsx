import { Container, Flex, Image, VStack,Box } from "@chakra-ui/react";
import AuthForm from "../../component/AuthForm/AuthForm";



const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxWidth={"container.md"} padding={0}>
        <Flex justifyContent={"center"}  alignContent={"center"} gap={10}>
          {/* Left Handside */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/public/auth.png" h={650} alt="Phone img" />
          </Box>

          {/* Right Handside */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/public/playstore.png" h={"10"} alt="playstore" />
              <Image src="/public/microsoft.png" h={"10"} alt="microsoft" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
