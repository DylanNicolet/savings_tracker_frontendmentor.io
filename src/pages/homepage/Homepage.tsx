import './Homepage.scss';
import data from '../../../data.json';
import type { Goal } from '../../types';

import Header from "../../layout/Header/Header";
import GoalCard from '../../components/GoalCard/GoalCard';
import BarChart from '../../components/BarChart/BarChart';

import iconFilter from '../../assets/images/icon-filter.svg';
import iconSort from '../../assets/images/icon-sort.svg';
import { useState } from 'react';

export default function Homepage() {
    // States
    const [finalDataArray, setFinalDataArray] = useState(data.goals || []);


    let totalSavingsAmount = 0;
    let totalActiveGoals = 0;
    let totalCompletedGoals = 0;

    data.goals.forEach(goal => {
        goal.deposits.forEach(deposit => {
            totalSavingsAmount += deposit.amount;
        });

        const currentAmount = goal.deposits.reduce((sum, deposit) => sum + deposit.amount, 0);

        if (currentAmount < goal.target) {
            totalActiveGoals += 1;
        } else if (currentAmount === goal.target) {
            totalCompletedGoals += 1;
        };
    });

    return(
        <>
            <Header />
            <h1 className='sr-only'>Homepage</h1>

            {/* Dashboard overview - Hero */}
            <section className="hero container">
                <h2 className='sr-only'>Dashboard overview</h2>
    
                <article className="hero__total card card--primary">
                    <h3>Total savings</h3>
                    <p>
                        ${ 
                            totalSavingsAmount.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }) 
                        }
                    </p>
                </article>
    
                <article className="hero__active-goals card">
                    <h3>Active goals</h3>
                    <p>{ totalActiveGoals }</p>
                </article>
    
                <article className="hero__completed-goals card">
                    <h3>Goals completed</h3>
                    <p>{ totalCompletedGoals }</p>
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
                        <img src={ iconFilter } alt="" />
                        Filters
                    </button>
                    <button className='btn btn--secondary'>
                        <img src={ iconSort } alt="" />
                        Sort by
                    </button>
                </div>

                <div className='your-goals__goals-container'>
                    {
                        finalDataArray.map((goal: Goal) => {
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