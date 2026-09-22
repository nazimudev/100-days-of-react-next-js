export default function Product({title, isStatus}){
    return (
      <div>
        <p>{isStatus ? title + " ✔" : title}</p>
      </div>
    );
}