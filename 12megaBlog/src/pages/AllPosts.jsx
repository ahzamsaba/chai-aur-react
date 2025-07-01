import React,{ useEffect }  from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../store/postSlice'

function AllPosts() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.posts)

    useEffect(() => {
        if(posts.length === 0){
            appwriteService.getPosts().then((result) => {
                if(result)
                    dispatch(setPosts(result.documents))
            })
        }
    }, [dispatch, posts])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts