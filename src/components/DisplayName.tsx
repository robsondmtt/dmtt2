// import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
// import { db } from "../lib/firebase";

interface DisplayNameProps {
    id: string;
}

const DisplayName = (props: DisplayNameProps) => {

    const [name,setName] = useState('')

    useEffect(() => {
        async function getAgente(){
            // const docSnap = await getDoc(doc(db, "users", props.id));
            //     const nome = docSnap.data().displayName.split(' ')
            //     setName(nome[0])
            
        }
        getAgente()

    }, [props.id])
    return (
        <>
            {
                name.toUpperCase()
            }
        </>
    )
}

export default DisplayName
