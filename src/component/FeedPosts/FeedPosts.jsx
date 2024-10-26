import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";

import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const { isLoading, posts } = useGetFeedPosts();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="5" w={"200px"} />
                <Skeleton height="5" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"} h={"500px"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {/* {!isLoading && (
        <>
          <FeedPost
            img="/public/img1.png"
            username="burakorkmezz"
            avatar="/public/img1.png"
          />
          <FeedPost
            img="/public/img2.png"
            username="josh"
            avatar="/public/img2.png"
          />
          <FeedPost
            img="/public/img3.png"
            username="janedoe"
            avatar="/public/img3.png"
          />
          <FeedPost
            img="/public/img4.png"
            username="bjohndoe"
            avatar="/public/img4.png"
          />
        </>
      )} */}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends.
          </Text>
          <Text color={"red.400"}>Stop coding and go make some!!</Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;