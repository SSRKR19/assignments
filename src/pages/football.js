import React from 'react';
const scheduledMatches = [
  {
    teamA: 'hyderabad FC',
    teamB: 'mumbai city',
    location: 'hyderabad',
    time: '2023-08-25 14:30',
  },
  {
    teamA: 'chennaiyin FC',
    teamB: 'bangalore FC',
    location: 'chennai',
    time: '2023-08-26 19:30',
  },
  {
    teamA: 'lucknow super jaints',
    teamB: 'gujarat titans',
    location: 'ahmedhabad',
    time: '2023-08-27 19:30',
  },
  {
      teamA: 'kerala blasters',
      teamB: 'northeast united',
      location: 'kochi',
      time: '2023-08-28 19:30',
    },
    {
      teamA: 'east bengal',
      teamB: 'FC goa',
      location: 'margao',
      time: '2023-08-29 19:00',
    },
    {
      teamA: 'hyderabad FC',
      teamB: 'bangalore FC',
      location: 'bangalore',
      time: '2023-08-30 19:30',
    },
    {
      teamA: 'chennaiyin FC',
      teamB: 'mumbai city',
      location: 'mumbai',
      time: '2023-09-01 19:30',
    },
    {
      teamA: 'lucknow  FC',
      teamB: 'gujarat  FC',
      location: 'ahmedhabad',
      time: '2023-09-02 19:30',
    },
    {
        teamA: 'kolkata FC',
        teamB: 'rajasthan FC',
        location: 'jaipur',
        time: '2023-09-03 19:30',
      },
      {
        teamA: 'delhi FC',
        teamB: 'punjab FC',
        location: 'delhi',
        time: '2023-09-04 19:00',
      },
  

];
function Football() {
  return (
    <div className='football'>
      <h1>football matches schedule</h1>
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

export default Football;