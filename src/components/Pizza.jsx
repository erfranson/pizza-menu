export default function Pizza(props){
    return (
        <div className="pizza">
                <img src={props.photoName} alt={props.photoName} />
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.ingredients}</p>
                    <p><strong>{props.price}</strong></p>
                </div>
        </div>
    )
}
