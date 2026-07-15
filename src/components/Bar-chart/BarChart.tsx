import './BarChart.scss';

export default function BarChart() {
    const data = [
        {
            amount: 400,
            monthName: 'Aug',
            barParcentage: 10
        },
        {
            amount: 1150,
            monthName: 'Sep',
            barParcentage: 50
        },
        {
            amount: 1149,
            monthName: 'Oct',
            barParcentage: 50
        },
        {
            amount: 1550,
            monthName: 'Nov',
            barParcentage: 60
        },
        {
            amount: 1950,
            monthName: 'Dec',
            barParcentage: 100
        },
        {
            amount: 1025,
            monthName: 'Jan',
            barParcentage: 40
        },
    ];

    return (
        <article className='bar-chart card'>
            <h2>Monthly deposits</h2>

            <div className='chart'>
                {data.map((monthly, index) => (
                    <div className='monthly' key={index}>
                        <div className="bar-container">
                            <div className='bar' style={{ height: `${monthly.barParcentage}%`}}></div>
                        </div>
                        <p className='amount'>${monthly.amount}</p>
                        <p className='month-name'>{monthly.monthName}</p>
                    </div>
                ))}
            </div>
        </article>
    )
}