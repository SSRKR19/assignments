import React from 'react';
const scheduledMatches = [
  {
    teamA: 'telugu titans',
    teamB: 'tamil thalivas',
    location: 'hyderabad',
    time: '2023-08-25 14:30',
  },
  {
    teamA: 'u mumba',
    teamB: 'puneri paltans',
    location: 'pune',
    time: '2023-08-26 19:30',
  },
  {
    teamA: 'up yodhas',
    teamB: 'bengal warriors',
    location: 'lucknow',
    time: '2023-08-27 19:30',
  },
  {
      teamA: 'harayana steelers',
      teamB: 'jaipur pink panthers',
      location: 'jaipur',
      time: '2023-08-28 19:30',
    },
    {
      teamA: 'dabang delhi',
      teamB: 'patna pairates',
      location: 'delhi',
      time: '2023-08-29 19:00',
    },
    {
      teamA: 'telugu titans',
      teamB: 'bangalore bulls',
      location: 'bangalore',
      time: '2023-08-30 19:30',
    },
    {
      teamA: 'tamil thalivas',
      teamB: 'u mumba',
      location: 'mumbai',
      time: '2023-09-01 19:30',
    },
    {
      teamA: 'telugu titans',
      teamB: 'gujarat super gaints',
      location: 'ahmedhabad',
      time: '2023-09-02 19:30',
    },
    {
        teamA: 'bengal warriors',
        teamB: 'jaipur pink panthers',
        location: 'jaipur',
        time: '2023-09-03 19:30',
      },
      {
        teamA: 'dabang delhi',
        teamB: 'harayana steelers',
        location: 'delhi',
        time: '2023-09-04 19:00',
      },
  

];
function Kabaddi() {
  return (
    <div className='kabaddi'>
      <h1>kabaddi matches schedule</h1>
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

export default Kabaddi;