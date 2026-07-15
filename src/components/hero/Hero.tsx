import BarChart from '../Bar-chart/BarChart';
import './Hero.scss';

export default function Hero() {
    return (
        <section className="hero container">
            <article className="hero__total card card--primary">
                <h2>Total savings</h2>
                <p>$11,249.00</p>
            </article>

            <article className="hero__active-goals card">
                <h2>Active goals</h2>
                <p>7</p>
            </article>

            <article className="hero__completed-goals card">
                <h2>Goals completed</h2>
                <p>2</p>
            </article>

            <div className='hero__barchart-container'>
                <BarChart />
            </div>
        </section>
    )
}