import React from 'react';
const scheduledMatches = [
  {
    teamA: 'sunrisers hyderabad',
    teamB: 'mumbai indians',
    location: 'hyderabad',
    time: '2023-08-25 14:30',
  },
  {
    teamA: 'chennai superkings',
    teamB: 'royal challengers bangalore',
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
      teamA: 'kolkata knight riders',
      teamB: 'kings XI punjab',
      location: 'punjab',
      time: '2023-08-28 19:30',
    },
    {
      teamA: 'delhi capitals',
      teamB: 'rajasthan royals',
      location: 'delhi',
      time: '2023-08-29 19:00',
    },
    {
      teamA: 'sunrisers hyderabad',
      teamB: 'royal challengers bangalore',
      location: 'bangalore',
      time: '2023-08-30 19:30',
    },
    {
      teamA: 'chennai superkings',
      teamB: 'mumbai indians',
      location: 'mumbai',
      time: '2023-09-01 19:30',
    },
    {
      teamA: 'lucknow super jaints',
      teamB: 'gujarat titans',
      location: 'ahmedhabad',
      time: '2023-09-02 19:30',
    },
    {
        teamA: 'kolkata knight riders',
        teamB: 'rajasthan royals',
        location: 'jaipur',
        time: '2023-09-03 19:30',
      },
      {
        teamA: 'delhi capitals',
        teamB: 'kings XI punjab',
        location: 'delhi',
        time: '2023-09-04 19:00',
      },
  

];
function Cricket() {
  return (
    <div className='cricket'>
      <h1>cricket match schedule</h1>
      
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

export default Cricket;