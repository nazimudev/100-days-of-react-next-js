export default function Details({personal}){
    return (
      <div>
        <h2>{personal.name}</h2>
        <p>{personal.age}</p>
        <p>{personal.skill}</p>
        <p>{personal.phone}</p>
      </div>
    );
}