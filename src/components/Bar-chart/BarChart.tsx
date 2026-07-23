import { useState, useEffect } from 'react';
import './BarChart.scss';
import data from '../../../data.json';

interface MonthData {
    amount: number;
    monthName: string;
    barParcentage: number;
}

const initialMonthlyData: MonthData[] = [
    { amount: 0, monthName: 'Jan', barParcentage: 0 },
    { amount: 0, monthName: 'Feb', barParcentage: 0 },
    { amount: 0, monthName: 'Mar', barParcentage: 0 },
    { amount: 0, monthName: 'Apr', barParcentage: 0 },
    { amount: 0, monthName: 'May', barParcentage: 0 },
    { amount: 0, monthName: 'Jun', barParcentage: 0 },
    { amount: 0, monthName: 'Jul', barParcentage: 0 },
    { amount: 0, monthName: 'Aug', barParcentage: 0 },
    { amount: 0, monthName: 'Sep', barParcentage: 0 },
    { amount: 0, monthName: 'Oct', barParcentage: 0 },
    { amount: 0, monthName: 'Nov', barParcentage: 0 },
    { amount: 0, monthName: 'Dec', barParcentage: 0 },
];

export default function BarChart() {
    // Detect screen size dynamically to choose the right number of months
    const [numberOfMonths, setNumberOfMonths] = useState(12);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 768) {
                setNumberOfMonths(6);   // Mobile
            } else if (width >= 768 && width < 1024) {
                setNumberOfMonths(7);   // Tablet
            } else {
                setNumberOfMonths(12);  // Desktop
            }
        }

        handleResize(); // Check layout on initial mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let monthlyData: MonthData[] = JSON.parse(JSON.stringify(initialMonthlyData));
    let totalDepositAmount = 0;

    function processData() {
        data.goals.forEach(goal => {
            goal.deposits.forEach(deposit => {
                const depositMonthName = new Date(deposit.createdAt).toLocaleString('default', { month: 'short' });
                const targetMonth = monthlyData.find(month => month.monthName === depositMonthName);
                
                totalDepositAmount += deposit.amount;

                if (targetMonth) {
                    targetMonth.amount += deposit.amount;
                }
            });
        });

        ajustForCurrentMonth();
        calculatePercentage(numberOfMonths);
    }

    function ajustForCurrentMonth() {
        const currentMonthName = new Date().toLocaleString('default', { month: 'short' });
        const targetIndex = monthlyData.findIndex((month) => month.monthName === currentMonthName);
        const actualIndex = targetIndex !== -1 ? targetIndex : monthlyData.length - 1;

        monthlyData = [
            ...monthlyData.slice(actualIndex + 1), 
            ...monthlyData.slice(0, actualIndex + 1)
        ];
    }

    function calculatePercentage(monthsToCompare: number) {
        // Look at only the last N months *after* they've been rearranged
        const recentAmounts = monthlyData.slice(-monthsToCompare).map(item => item.amount);
        const highestMonthlyAmount = Math.max(...recentAmounts);

        if (highestMonthlyAmount === 0) {
            monthlyData.forEach(monthData => { monthData.barParcentage = 0; });
            return;
        }

        monthlyData.forEach(monthData => {
            monthData.barParcentage = Math.round((100 / highestMonthlyAmount) * monthData.amount);
        });
    }

    // Process the data array before rendering
    processData();

    // Extract exactly the trailing subset needed for the current screen size
    const visibleMonths = monthlyData.slice(-numberOfMonths);

    return (
        <article className='bar-chart card'>
            <h2>Monthly deposits</h2>

            <div className='chart'>
                {visibleMonths.map((monthly, index) => (
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
    );
}