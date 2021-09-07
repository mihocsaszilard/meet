import react, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const MyPieChart = ({ events }) => {
   
    const [data, setData ] = useState([]); 
    const COLORS = ['#f8b195', '#f67280', '#c06c87', '#6c5b7b', '#355c7d'];
  
    const getData = () => {
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
      let data = genres.map((genre) => {
        const value = events.filter((event) => 
          event.summary.split(' ').includes(genre)).length;
          return { name: genre, value };
      });
      return data;
    };
    
    useEffect(() => {
      setData(() => getData());
    },[events]);
    
    return (
      <ResponsiveContainer width='100%' height={250}>
        <PieChart width={800} height={450}
                  margin={{ top: 0, right: 100, bottom: 0, left: 100 }}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend align="center" height={45} />
        </PieChart>
      </ResponsiveContainer>
    );
};

 

export default MyPieChart;