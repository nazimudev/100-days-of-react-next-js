import Item from "./components/Item"
import Product from "./components/products";

function App() {

  return (
    <>
      <Item
        doctor={{ name: "Dr. Rahim", degree: "MBBS" }}
        isStatus={"doctor"}
      />
      <Item patient={{ name: "Nazim Uddin", age: 29 }} isStatus={"patient"} />
      <Item patient={{ name: "Mehedi", age: 20 }} isStatus={"patient"} />
      <Item
        doctor={{ name: "Dr. Mueen", degree: "MBBS" }}
        isStatus={"doctor"}
      />
      <Item
        doctor={{ name: "Dr. Monira", degree: "MBBS" }}
        isStatus={"doctor"}
      />
      <Product title="This is a new product" isStatus={true} />
      <Product title="This is a new product" isStatus={false} />
      <Product title="This is a new product" isStatus={true} />
      <Product title="This is a new product" isStatus={false} />
      <Product title="This is a new product" isStatus={true} />
    </>
  );
}

export default App
