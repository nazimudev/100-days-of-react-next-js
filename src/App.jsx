import User from "./assets/components/User";

function App() {
  const person = {
    name: "Nazim Uddin",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/02/15/10/22/backlinks-7791414_1280.jpg",
  };

  const imgSize = {
    w: 100,
    h: 100,
  };

  const personal = {
    name: "Nazim Uddin",
    age: 29,
    skill: "Web Developer & App Developer",
    phone: "+880 1786-368993",
  };

  return (
    <>
      <User person={person} imgSize={imgSize} personal={personal} />
    </>
  );
}

export default App;
