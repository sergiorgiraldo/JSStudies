import { getFilteredEvents } from "../../dummy-data";
import { useRouter} from 'next/router';
import EventList from "../../components/events/EventList";

function FilteredEventsPage(){
    const router = useRouter();
    const filterData = router.query.slugs; 

    if (filterData){
        const yearFiltered = +filterData[0];
        const monthFiltered = + filterData[1];
        const events = getFilteredEvents({
            year: yearFiltered,
            month: monthFiltered
        });
        if (events && events.length > 0){
            return( 
                <div>
                    <EventList key="1" events={events}></EventList>
                </div>
            );
        }
        else{
            return <h2>NOTHING</h2>    
        }
    }
    else{
        return <p>NOTHING</p>
    }
}

export default FilteredEventsPage;