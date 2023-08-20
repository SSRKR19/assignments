import React from 'react';
const scheduledMatches = [
    {
      teamA: 'Team A',
      teamB: 'Team B',
      location: 'Stadium A',
      time: '2023-08-25 15:00',
    },
    {
      teamA: 'Team X',
      teamB: 'Team Y',
      location: 'Gymnasium B',
      time: '2023-08-26 18:30',
    },
    {
      teamA: 'Team M',
      teamB: 'Team N',
      location: 'Field C',
      time: '2023-08-27 12:00',
    },
    {
        teamA: 'Team alpha',
        teamB: 'Team beta',
        location: 'Field d',
        time: '2023-08-27 16:00',
      },
      {
        teamA: 'Team S',
        teamB: 'Team P',
        location: 'Field C',
        time: '2023-08-28 12:00',
      },

  ];
  
function Volleyball() {
  return (
    <div className='volleyball'>
      <h1>volleyball matches schedule</h1>
      <ul>
        {scheduledMatches.map((match, index) => (
          <div class="volley" key={index}>
            <p>{match.teamA} vs {match.teamB}</p>
            <p id="loc">location: {match.location}</p>
            <p id="time">Time: {match.time}</p>
            <br/>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Volleyball;