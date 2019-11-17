import React from 'react';

//button triggers google Oauth (can I grab their name to use for a pop up on their goe location?)
function Home() {
    return(
        <div>
            <h1>Welcome to Art Maps!</h1>
            <h3>Please Login Below</h3>
            <button>Login with Google</button>
        </div>
    )
}

export default Home;