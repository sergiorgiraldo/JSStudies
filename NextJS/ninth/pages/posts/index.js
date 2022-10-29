import AllPosts from "../../components/posts/all-posts";

const DUMMY = [
    {title:"foo", image:"i.png", excerpt:"foo foo foo foo foo foo", date:"2022-10-28", slug:"1"},
    {title:"bar", image:"i.png", excerpt:"bar bar bar bar bar bar", date:"2022-10-28", slug:"2"},
    {title:"baz", image:"i.png", excerpt:"baz baz baz baz baz baz", date:"2022-10-28", slug:"3"},

];

function AllPostsPage(){
    return (
        <AllPosts posts={DUMMY} />
    );
}

export default AllPostsPage;