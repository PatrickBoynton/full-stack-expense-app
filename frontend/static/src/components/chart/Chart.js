import React from 'react';
import ChartBar from './chart-bar/ChartBar';
import TotalDisplay from '../expenses/expense-filter/total-display/TotalDisplay';
import './Chart.css';

const Chart = ({data}) => {
    const dataPoints = data.map((point) => point.value);

    const maxValue = Math.max(...dataPoints);
    const total = dataPoints.reduce((a, b) => a + b);
    return (
        <section className="chart">
            {data.map((point) =>
                <ChartBar key={point.label}
                          value={point.value}
                          maxValue={maxValue}
                          label={point.label}/>
            )}
            <TotalDisplay total={total}/>
        </section>
    );
};

export default Chart;
