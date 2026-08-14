import './GoalCard.scss';

type GoalsCardProps = {
    title: string;
    percentage: number;
    currentAmount: number;
    targetAmount: number;
    deadline: string | null;
}

export default function GoalCard({ title, percentage, currentAmount, targetAmount, deadline }: GoalsCardProps) {
    const isCompleted =  currentAmount === targetAmount ? ' --completed' : '';
    const isZero = currentAmount === 0 ? ' --zero' : '';

    return (
        <article className={`goal-card card ${ isCompleted + isZero}`}>
            <h3 className='title'>{ title }</h3>

            <p className='percentage'>{ percentage }%</p>

            <div className='bar-container'>
                <div className="bar" style={{width: percentage + '%'}}></div>
            </div>

            <div className="footer">
                <p className='amount' >${ currentAmount } of ${ targetAmount }</p>
                
                { deadline && 
                    <p className='deadline'>
                        <span>&nbsp;&nbsp;&#8226;&nbsp;&nbsp;</span>
                        { deadline }
                    </p>
                }
            </div>
        </article>
    )
}