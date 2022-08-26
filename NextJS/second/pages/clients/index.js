import Link from 'next/link';

function ClientsPage(){
    const clients = [
        {id:"john", name:"John Doe"},
        {id:"jane", name:"Jane Doe"},
    ];

    return( 
    <div>
        <h1>List of clients!</h1>
        <ul>
            {clients.map((c)=>(
                <li key={c.id}>
                    <Link href={`/clients/${c.id}`}>{c.name}</Link>
                </li>
            ))}
        </ul>
    </div>
    );
}
export default ClientsPage;