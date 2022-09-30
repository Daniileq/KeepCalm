import React from 'react';
import LineChart from 'react-linechart';
import { useSelector } from 'react-redux';

function userPage() {
  const userIdmoodId = useSelector((prev) => prev);
  console.log(userIdmoodId);
  const data = [
    {
      color: 'steelblue',
      points: [
        { x: 1, y: 2 },
        { x: 3, y: 5 },
        { x: 8, y: 0 },
      ],
    },
  ];
  return (
    <div>
      {' '}
      <LineChart width={600} height={400} data={data} />
    </div>
  );
}
export default userPage;
