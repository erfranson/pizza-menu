export default function Footer() {
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = (hour) => {
        if(hour >= openHour && hour < closeHour){
            return true
        }
        return false
    }

    return <footer className="footer">We are currently {isOpen(hour) ? 'Open': 'Closed'}.</footer>
}