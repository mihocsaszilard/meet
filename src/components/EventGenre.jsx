import react, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EventGenre = ({ events }) => {
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
  const COLORS = ['red', 'blue', 'gree', 'orange', 'aqua'];

  const getData = () => {
    let data = genres.map((genre) => {
      const value = events.filter(({event}) => 
        event.summary.split(' ').includes(genre)).length;
        return { name: genre, value };
    });
    data = data.filter(data => data.value)
    return data;
  };
  
  useEffect(() => {
    setData(() => getData());
  },[events]);
  
  const [data, setData ] = useState([]); 
 
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
              label={({ percent}) => `${(percent * 100).toFixed(0)}%`}
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