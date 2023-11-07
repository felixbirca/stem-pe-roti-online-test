import { useEffect, useState } from "react";
import { db } from "../firebase"
import { collection, query, getDocs, orderBy } from "firebase/firestore";

function VisitedPlaces() {
    const [locations, setLocations] = useState<any[]>([]);

    const q = query(collection(db, "locations"), orderBy("date"));
    
    useEffect(() => {
        const getLocations = async () => {
            const querySnapshot = await getDocs(q);
            setLocations(querySnapshot.docs.map(x => x.data()));
        }

        getLocations();
    }, []);


    return (
        <>
            {locations.map(location => (
                JSON.stringify(location)
            ))}
        </>
    )
}

export default VisitedPlaces;
