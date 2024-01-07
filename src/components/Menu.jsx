import Pizza from "./Pizza";
import pizzaData from "../data";

export default function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      {pizzas &&    
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.id}
            pizzaData={pizza}
          />
        ))}
      </div>
      }
    </main>
  );
}
