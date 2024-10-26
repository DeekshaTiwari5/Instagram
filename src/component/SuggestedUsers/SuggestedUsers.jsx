import { Box, Flex, Text, VStack,Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import React from "react";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";


const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  // optional: render loading skeleton
  if (isLoading) return null;
  return (
    <VStack py={8} px={6} gap={4} border={"black"}>

      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      {/* <SuggestedUser name="" />
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser /> */}
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link
          href="https://www.youtube.com/channel/UC17STAz5dlTmKOPB_FKdXQg"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Deeksha Tiwari
        </Link>
      </Box>
    </VStack>
  );
}

export default SuggestedUsers;