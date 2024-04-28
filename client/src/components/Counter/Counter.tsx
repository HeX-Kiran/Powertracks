import "./Counter.css"

function Counter() {
  return (
    <section className="section-counter">
        <div className="flex items-center justify-center flex-col  counter-container counter--scale-down">
            <h1 >15+</h1>
            <p>Years Experience</p>
        </div>
        <div className="flex items-center justify-center flex-col  counter-container counter--scale">
            <h1 >5 Gigawatts</h1>
            <p>Energy generated</p>
        </div>
        <div className="flex items-center justify-center flex-col  counter-container counter--scale-down">
            <h1 >100+</h1>
            <p>Homes transformed</p>
        </div>
    </section>
  )
}

export default Counter