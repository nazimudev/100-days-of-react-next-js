export default function Doctor({ doctor }) {
  return (
    <div>
      <h1>{doctor.name}</h1>
      <p>{doctor.degree}</p>
    </div>
  );
}
