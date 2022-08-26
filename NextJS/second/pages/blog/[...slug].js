import { useRouter} from 'next/router'

function BlogSlugPage(){
    const router = useRouter();
    return( 
    <div>
        <h1>My Blog</h1>
        <h2>{router.query.slug}</h2> 
    </div>
    );
}
export default BlogSlugPage;