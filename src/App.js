import React from 'react';
import Day from './day';
import Navbar from './navbar';

const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const weekItems = week.map((day) =>
<Day day={day} />
);

class App extends React.Component {
  render () {
      return (
          <div class="flex flex-col w-screen h-screen bg-black font-mono">
              <Navbar />
              <div class="flex flex-row space-x-4 items-stretch h-full w-full p-3">
                <Day day="monday" />
                <Day day="tuesday" />
                <Day day="wednesday" />
                <Day day="thursday" />
                <Day day="friday" />
                <Day day="saturday" />
                <Day day="sunday" />
              </div>
          </div>
      )
  }
}


export default App;
