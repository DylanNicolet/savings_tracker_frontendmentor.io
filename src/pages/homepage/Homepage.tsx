import './Homepage.scss';
import data from '../../../data.json';
import type { Goal } from '../../types';

import Header from "../../layout/Header/Header";
import GoalCard from '../../components/GoalCard/GoalCard';
import BarChart from '../../components/BarChart/BarChart';

import iconFilter from '../../assets/images/icon-filter.svg';
import iconSort from '../../assets/images/icon-sort.svg';

export default function Homepage() {
    return(
        <>
            <Header />
            <h1 className='sr-only'>Homepage</h1>

            {/* Dashboard overview - Hero */}
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

            {/* Your Goals */}
            <section className='your-goals container'>
                <div className='your-goals__header'>
                    <h2 className='title'>Your goals</h2>
                    <button className='btn btn--secondary'>
                        <img src={iconFilter} alt="" />
                        Filters
                    </button>
                    <button className='btn btn--secondary'>
                        <img src={iconSort} alt="" />
                        Sort by
                    </button>
                </div>

                <div className='your-goals__goals-container'>
                    {
                        data.goals.map((goal: Goal) => {
                            const currentAmount = goal.deposits.reduce((sum, deposit) => sum + deposit.amount, 0);
                            const percentage = goal.target ? Math.round((currentAmount / goal.target) * 100) : 0;

                            return (
                                <GoalCard 
                                    key={goal.id}
                                    title={goal.name}
                                    percentage={percentage}
                                    currentAmount={currentAmount}
                                    targetAmount={goal.target}
                                    deadline={goal.deadline}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}