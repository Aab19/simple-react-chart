import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Bar } from "react-chartjs-2"
import ChartStyle from "./style"

const ChartGraph = (props) => {
  const [chartData, setChartData] = useState({})

  const recovered = props.data.map((val, key) => {
    return val.recovered
  })

  const country = props.data.map((val, key) => {
    return val.countryRegion
  })

  const chart = () => {
    setChartData({
      labels: country,
      datasets: [
        {
          label: "Chart",
          data: recovered,
          backgroundColor: [
            "rgba(255,255,255, 0.6)",
            "rgba(255,255,255, 0.6)",
            "rgba(255,255,255, 0.6)",
            "rgba(255,255,255, 0.6)",
            "rgba(255,255,255, 0.6)",
            "rgba(255,255,255, 0.6)",
          ],
          borderWidth: 0,
        },
      ],
    })
  }

  useEffect(() => {
    chart()
  }, [])
  return (
    <ChartStyle>
      <div className="chart-title">{props.chartTitle}</div>
      <Bar
        data={chartData}
        options={{
          label: {
            display: false,
          },
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          responsive: true,
        }}
      />
    </ChartStyle>
  )
}

export default ChartGraph

ChartGraph.propTypes = {
  data: PropTypes.array.isRequired,
  chartTitle: PropTypes.string.isRequired,
}
