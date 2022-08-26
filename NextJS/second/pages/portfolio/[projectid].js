import { useRouter} from 'next/router'

function PortfolioProjectPage(){
    const router = useRouter();



    return( 
    <div>
        <h1>The portfolio project page</h1>
        <h2>{router.query.projectid}</h2> 
    </div>
    );
}
export default PortfolioProjectPage;