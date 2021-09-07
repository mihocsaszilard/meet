import react, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EventGenre = ({ events }) => {

  const [data, setData ] = useState([]); 

  
  const COLORS = ['red', 'blue', 'gree', 'orange', 'aqua'];

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
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
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

export default EventGenre;