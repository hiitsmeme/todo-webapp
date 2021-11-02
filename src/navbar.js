import React from 'react';

class Navbar extends React.Component {
    render () {
        return (
            <div class="w-screen flex flex-row p-5 text-blue-200 font-bold text-xl">
                <div class="flex flex-row space-x-5">
                    <div class="text-3xl">TODO's</div> 
                    <div class="self-end">Logout</div>  
                </div>    
            </div>
        )
    }
}

export default Navbar;