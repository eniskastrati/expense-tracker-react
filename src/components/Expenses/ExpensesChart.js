import React from 'react'

import Chart from '../chart/Chart'

function ExpensesChart(props) {
    const chartDataPoints = [
        { label: 'Jan', valuse: 0 },
        { label: 'Feb', valuse: 0 },
        { label: 'Mar', valuse: 0 },
        { label: 'Apr', valuse: 0 },
        { label: 'May', valuse: 0 },
        { label: 'Jun', valuse: 0 },
        { label: 'Jul', valuse: 0 },
        { label: 'Aug', valuse: 0 },
        { label: 'Sep', valuse: 0 },
        { label: 'Oct', valuse: 0 },
        { label: 'Nov', valuse: 0 },
        { label: 'Dec', valuse: 0 },

    ];
    return (
        <Chart />
    )
}

export default ExpensesChart