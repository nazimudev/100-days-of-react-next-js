
export default function Avatar({person, imgSize}){
    
    return (
      <div>
        <img
          src={person.imageUrl}
          alt={person.name}
          width={imgSize.w}
          height={imgSize.h}
        />
      </div>
    );
}