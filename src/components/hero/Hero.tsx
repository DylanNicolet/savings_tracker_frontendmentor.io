import './Hero.scss';

export default function Hero() {
    return (
        <section className="hero container">
            <div className="hero__total">
                <p>Total savings</p>
                <b>$11,249.00</b>
            </div>

            <div className="hero__active-goals">
                <p>Active goals</p>
                <b>7</b>
            </div>

            <div className="hero__completed-goals">
                <p>Goals</p>
                <b>2</b>
            </div>


        </section>
    )
}