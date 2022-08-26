import Link from 'next/link';

function HomePage(){
    return( 
    <div>
        <h1>Hello World!</h1>
        <Link href="/portfolio">Portfolio</Link> <br/>
        <Link href="/clients">Clients</Link>
    </div>
    );
}
export default HomePage;