import React from 'react';
import Day from './day';
import Navbar from './navbar';

class App extends React.Component {
  render () {
      return (
          <div class="flex flex-col w-screen min-h-screen overflow-auto bg-black font-mono">
              <Navbar class="box-border"/>
              <div class='w-full h-full flex sm:grid sm:grid-cols-3 sm:flex-wrap
                md:grid-cols-3 md:place-content-stretch lg:grid-cols-4 flex-col gap-2 box-border'>
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
