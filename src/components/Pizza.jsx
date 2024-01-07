export default function Pizza({ pizzaData }){

    return (
        <div className={`pizza ${pizzaData.soldOut ? 'sold-out' : ''}`}>
                <img src={pizzaData.photoName} alt={pizzaData.photoName} />
                <div>
                    <h3>{pizzaData.name}</h3>
                    <p>{pizzaData.ingredients}</p>
                    <p><strong>{ pizzaData.soldOut ? 'SOLD OUT' : pizzaData.price}</strong></p>
                </div>
        </div>
    )
}
