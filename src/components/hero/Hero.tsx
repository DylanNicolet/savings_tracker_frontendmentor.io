import BarChart from '../BarChart/BarChart';
import './Hero.scss';

export default function Hero() {
    return (
        <section className="hero container">
            <h2 className='sr-only'>Dashboard overview</h2>

            <article className="hero__total card card--primary">
                <h3>Total savings</h3>
                <p>$11,249.00</p>
            </article>

            <article className="hero__active-goals card">
                <h3>Active goals</h3>
                <p>7</p>
            </article>

            <article className="hero__completed-goals card">
                <h3>Goals completed</h3>
                <p>2</p>
            </article>

            <div className='hero__barchart-container'>
                <BarChart />
            </div>
        </section>
    )
}