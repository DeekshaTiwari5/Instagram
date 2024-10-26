import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post }) => {
    const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      {/* <PostHeader username={username} avatar={avatar} i /> */}
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        {/* <Image src={img} alt="user profilepic" /> */}
        <Image src={post.imageURL} alt={"FEED POST IMG"} />
      </Box>
      {/* <PostFooter username={username} /> */}
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
}

export default FeedPost