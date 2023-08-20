import React from 'react';
const scheduledMatches = [
{
  teamA: 'uttar pradesh',
  teamB: 'gujarat ',
  location: 'ahmedhabad',
  time: '2023-08-27 19:30',
},
{
    teamA: 'kolkata',
    teamB: 'punjab',
    location: 'punjab',
    time: '2023-08-28 19:30',
  },
  {
    teamA: 'delhi ',
    teamB: 'rajasthan',
    location: 'delhi',
    time: '2023-08-29 19:00',
  },
  {
    teamA: 'hyderabad',
    teamB: 'bangalore',
    location: 'bangalore',
    time: '2023-08-30 19:30',
  },
  {
    teamA: 'chennai',
    teamB: 'mumbai',
    location: 'mumbai',
    time: '2023-09-01 19:30',
  },
  {
    teamA: 'lucknow',
    teamB: 'gujarat',
    location: 'ahmedhabad',
    time: '2023-09-02 19:30',
  },
  {
      teamA: 'andhra pradesh',
      teamB: 'rajasthan ',
      location: 'jaipur',
      time: '2023-09-03 19:30',
    },
    {
      teamA: 'assom',
      teamB: 'punjab',
      location: 'delhi',
      time: '2023-09-04 19:00',
    },
   
      {
        teamA: 'hyderabad',
        teamB: 'manipur',
        location: 'hyderabad',
        time: '2023-08-25 14:30',
      },
      {
        teamA: 'chennai',
        teamB: 'bangalore',
        location: 'chennai',
        time: '2023-08-26 19:30',
      },
    ]

function Hockey() {
  return (
    <div className='hockey'>
      <h1>hockey matches schedule</h1>
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

export default Hockey;