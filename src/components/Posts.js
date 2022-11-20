import Post from './Post';



export default function Posts() {
    const postdata = [
        {
            userImage: '/assets/img/barked.svg',
            userName: 'barked',
            userPost: '/assets/img/dog.svg',
            userLiked: '/assets/img/respondeai.svg',
            likedBy: 'respondeai',
            likes:599
        },
        {
            userImage: '/assets/img/meowed.svg',
            userName: 'meowed',
            userPost: '/assets/img/gato-telefone.svg',
            userLiked: '/assets/img/barked.svg',
            likedBy: 'barked',
            likes:991
        }
    ]

    return (
        <div className='posts'>
        {postdata.map( (p) => (
            <Post userImage={p.userImage} userName={p.userName} userPost={p.userPost} userLiked={p.userLiked} likedBy={p.likedBy} likes={p.likes}  />
        ))}
        </div>
    )
}