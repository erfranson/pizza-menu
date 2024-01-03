import React from 'react'
import ReactDOM from 'react-dom/client'
import pizzaData from './data'

function App(){
    return (
        <div>
            <Header/>
            <Menu />
            <Footer/>
        </div>
    )
} 
function Header() {
    return <h1>Fast React Pizza Co.</h1>
}

function Menu() {
    return (
        <div>
            <h1>Our Menu</h1>
            <Pizza />
        </div>
    )
}

function Footer() {
    return <footer>{new Date().toLocaleTimeString()} We are currently open.</footer>
}

function Pizza(){
    return (
        <div>
            <img src={pizzaData[1].photoName} alt={pizzaData[1].name}/>
            <h2>{pizzaData[1].name}</h2>
            <p>{pizzaData[1].ingredients }</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)