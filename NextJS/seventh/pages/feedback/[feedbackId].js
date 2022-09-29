import { useRouter} from 'next/router'

function FeedbackIdPage(){
    const router = useRouter();

    return( 
    <div>
        <h1>Feedback</h1>
        <h2>Id :: {router.query.id}</h2>
    </div>
    );
}
export default FeedbackIdPage;