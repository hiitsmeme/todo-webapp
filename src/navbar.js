import React from 'react';

class Navbar extends React.Component {
    render () {
        return (
            <div class="w-screen flex flex-row p-3 text-blue-200 font-bold text-xl pt-5 place-items-center">
                <div class="flex flex-row self-center space-x-5">
                    <div class="text-3xl">TODO's</div> 
                    <div class="self-end">Logout</div>  
                </div>    
            </div>
        )
    }
}

export default Navbar;