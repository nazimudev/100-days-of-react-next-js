import Doctor from "./Doctor"
import Patient from "./Patient"

export default function Item({doctor, patient, isStatus}){
    
    
    if(isStatus === "doctor"){
        return <Doctor doctor={doctor} />
    }
    
    return (
        <>
            <Patient patient={patient} />
        </>
    )
}