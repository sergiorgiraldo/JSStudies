import { useRouter} from 'next/router'

function ClientProjectsPage(){
    const router = useRouter();

    return( 
    <div>
        <h1>Projects for a given client</h1>
        <h2>Client :: {router.query.id}</h2> 
    </div>
    );
}
export default ClientProjectsPage;