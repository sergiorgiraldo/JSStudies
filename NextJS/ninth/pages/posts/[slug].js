import PostContent from "../../components/posts/post-detail/post-content";
import {getPostData, getPostsFiles} from "../../lib/posts-util";

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
	const { params } = context;
	const { slug } = params;
	const post = getPostData(`${slug}.md`);

	return {
		props: { whichPost: post },
		revalidate: 600		
	};
}

export async function getStaticPaths() {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((fileName) =>
		fileName.replace(/\.md$/, "")
	);

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false
	};
}

export default PostDetailPage;