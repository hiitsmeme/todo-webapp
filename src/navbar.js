import React from 'react';

class Navbar extends React.Component {
    render () {
        return (
            <div class="w-screen flex flex-row p-5 text-blue-200 font-bold text-xl">
                <div class="flex flex-row space-x-5 w-full">
                    <div class="self-end place-self-start">Logout</div>
                    <div class="flex place-content-center w-full text-3xl"><div>TODO's</div></div>  
                </div>    
            </div>
        )
    }
}

export default Navbar;