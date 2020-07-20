import React from 'react'
import {Bar} from 'react-chartjs-2'

//rgba(255,99,132,0.2)
const data = {
    labels: ['Fukrey','Dil Bechara', 'Kaahani', 'Baahubali'],
    datasets: [
      {
        label: 'Movie Critics Rating out of 5',
        backgroundColor: 'SlateBlue',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [2.4,4.3,3.5,4.8]
      }
    ]
  };

  class RatingChart extends React.Component
  {
      render()
      {
          return(
           <div style={{paddingTop:80}}>
               <Bar data={data} width={100} height={200} options={{maintainAspectRatio:false}}/>
           </div>
          );
      }
  }

  export default RatingChart