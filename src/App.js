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
          <div class="flex flex-col w-screen min-h-screen overflow-auto bg-black font-mono">
              <Navbar class="box-border"/>
              <div class="flex sm:flex-row flex-col w-full h-full sm:flex-wrap gap-3 justify-evenly box-border">
                <Day day="monday"/>
                <Day day="tuesday" />
                <Day day="wednesday" />
                <Day day="thursday" />
                <Day day="friday" />
                <Day day="saturday"/>
                <Day day="sunday"/>
              </div>
          </div>
      )
  }
}


export default App;
