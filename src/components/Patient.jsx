export default function Patient({patient}){
    return (
        <div>
            <h1>{patient.name}</h1>
            <p>{patient.age}</p>
        </div>
    )
}