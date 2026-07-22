import './BarChart.scss';
import data from '../../../data.json';

export default function BarChart() {

    let totalDepositAmount = 0;

    let monthlyData = [
        {
            monthNumber: 1,
            amount: 0,
            monthName: 'Jan',
            barParcentage: 0,
        },
        {
            monthNumber: 2,
            amount: 0,
            monthName: 'Feb',
            barParcentage: 0,
        },
        {
            monthNumber: 3,
            amount: 0,
            monthName: 'Mar',
            barParcentage: 0,
        },
        {
            monthNumber: 4,
            amount: 0,
            monthName: 'Apr',
            barParcentage: 0,
        },
        {
            monthNumber: 5,
            amount: 0,
            monthName: 'May',
            barParcentage: 0,
        },
        { 
            monthNumber: 6,
            amount: 0,
            monthName: 'Jun',
            barParcentage: 0,
        },
        {
            monthNumber: 7,
            amount: 0,
            monthName: 'Jul',
            barParcentage: 0,
        },
        {
            monthNumber: 8,
            amount: 0,
            monthName: 'Aug',
            barParcentage: 0,
        },
        {
            monthNumber: 9,
            amount: 0,
            monthName: 'Sep',
            barParcentage: 0,
        },
        {
            monthNumber: 10,
            amount: 0,
            monthName: 'Oct',
            barParcentage: 0,
        },
        {
            monthNumber: 11,
            amount: 0,
            monthName: 'Nov',
            barParcentage: 0,
        },
        {
            monthNumber: 12,
            amount: 0,
            monthName: 'Dec',
            barParcentage: 0,
        },
    ];

    function processData() {
        data.goals.forEach(goal => {
            goal.deposits.forEach(deposit => {
                const depositMonthName = new Date(deposit.createdAt).toLocaleString('default', { month: 'short' });
                const targetMonth = monthlyData.find(month => month.monthName === depositMonthName);
                
                // Update total amount
                totalDepositAmount += deposit.amount;

                if (targetMonth) {
                    targetMonth.amount += deposit.amount;
                }
            });
        });

        calculatePercentage();
    }

    function calculatePercentage() {
        const allAmounts = monthlyData.map(item => item.amount);
        const highestMonthlyAmount = Math.max(...allAmounts);

        if (highestMonthlyAmount === 0) {
            monthlyData.forEach(monthData => {
                monthData.barParcentage = 0;
            });
            return;
        }

        monthlyData.forEach(monthData => {
            monthData.barParcentage = Math.round((100 / highestMonthlyAmount) * monthData.amount);
        })
    } 

    // Continue here next time, find the correct monthNumber
    function ajustForCurrentMonth() {
        const thisMonthName = new Date().toLocaleString('default', { month: 'short' });

        const targetMonth = monthlyData.find((month) => month.monthName === thisMonthName);
    }

    processData()

    return (
        <article className='bar-chart card'>
            <h2>Monthly deposits</h2>

            <div className='chart'>
                {monthlyData.map((monthly, index) => (
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