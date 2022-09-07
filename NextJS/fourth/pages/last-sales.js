import {useEffect, useState} from "react";

function LastSalesPage(props){
    const [sales, setSales] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);

        fetch("https://nextjs-course-d43b3-default-rtdb.europe-west1.firebasedatabase.app/sales.json")
        .then((response) => response.json())
        .then((data) => { 
            const transformedSales = [];
            for (const key in data){
                transformedSales.push({id:key, username:data[key].username, volume:data[key].volume});
            }
            setSales(transformedSales);
            setIsLoading(false);
        });
    }, []);

    if (isLoading){
        return <p>Loading ....</p>;
    }

    return <ul>{sales.map(s=><li key={s.id}>{s.username} bought {s.volume}</li>)}</ul>;
}

export default LastSalesPage;