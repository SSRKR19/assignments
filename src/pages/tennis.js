import React from 'react';
const scheduledMatches = [
  {
    teamA: 'Team 1',
    teamB: 'Team 2',
    location: 'Stadium A',
    time: '2023-08-25 15:00',
  },
  {
    teamA: 'Team 3',
    teamB: 'Team 4',
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
    {
      teamA: 'Team R',
      teamB: 'Team J',
      location: 'Stadium A',
      time: '2023-08-25 15:00',
    },
    {
      teamA: 'Team O',
      teamB: 'Team Z',
      location: 'Gymnasium B',
      time: '2023-08-26 18:30',
    },
    {
      teamA: 'Team E',
      teamB: 'Team F',
      location: 'Field C',
      time: '2023-08-27 12:00',
    },
    {
        teamA: 'Team C',
        teamB: 'Team D',
        location: 'Field d',
        time: '2023-08-27 16:00',
      },
      {
        teamA: 'Team S',
        teamB: 'Team Q',
        location: 'Field C',
        time: '2023-08-28 12:00',
      },

];
function Tennis() {
  return (
    <div className='tennis'>
      <h1>tennis matches schedule</h1>
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

export default Tennis;