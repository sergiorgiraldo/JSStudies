import PostContent from "../../components/posts/post-detail/post-content";

function PostDetailPage(props){
    const { whichPost } = props;

	if (!whichPost) {
		return <p>Loading ...</p>;
	}    

	return (
		<PostContent post={whichPost} />
	);    
}

export async function getStaticProps(context) {
	const post = {
		title:"foo content", 
		image:"i.png", 
		content:`
# This is my first post
* One  
* Two  
* Three

**And bold**
			`, 
		date:"2022-10-28", 
		slug:"1"
	};

	return {
		props: { whichPost: post },
	};
}

export async function getStaticPaths() {
	const ids = ["1","2","3"];
	const pathsWithParams = ids.map((id) => ({ params: { slug: id } }));
	return {
		paths: pathsWithParams,
		fallback: false,
	};
}

export default PostDetailPage;