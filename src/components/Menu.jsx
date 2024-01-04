import Pizza from "./Pizza";
import pizzaData from "../data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.id}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
          />
        ))}
      </div>
    </main>
  );
}
