import { Avatar, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"


function Comment({comment,createdAt,likes,username,useravatar}) {
    const [liked,setLiked]= useState()

  return (
<>
<Flex gap={4} py={2} my={2} w={'full'}> 
    <Avatar src={useravatar} size={'sm'}/>
        <Flex gap={1} w={'full'} flexDirection={'column'} >
            <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'} >
                <Text fontSize={'sm'} fontWeight={'bold'}  >
                    {username}
                </Text>
                <Flex gap={2} alignItems={'center'}>
                    <Text fontSize={'sm'} color={'gray.light'} >
                        {createdAt}
                    </Text>
                    <BsThreeDots/>
                </Flex>
            </Flex>
            <Flex>
                
            <Text>{comment}</Text>
            </Flex>
            <Actions liked={liked} setLiked={setLiked}/>
            <Text fontSize={'sm'} color={'gray.light'} >
                {likes+(liked?1:0)} likes
            </Text>
        </Flex>
</Flex>
</>
  )
}

export default Comment