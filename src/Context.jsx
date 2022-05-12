import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext([{
    firstName: "Lech",
    lastName: "K.",
    suffix: 1,
    email: "lechk@wawa.pl"

}, ()=>{}])

function LevelFive(){
    const [user, setUser] = useContext(UserContext)
    return (
        <div>

            <h5>
                {user.firstName} {user.lastName} , {user.suffix}
                <div>
                <button onClick={()=>{
                    // setUser({...user, suffix: user.suffix+1})
                    setUser(Object.assign({}, user, {suffix: user.suffix+1}))
                }}>Increment</button>
                </div>
            </h5>
        </div>

    )
}

function LevelFour(){
    return (
        <div>
            <h4>Fourth level</h4>
            <LevelFive/>
        </div>
    )
}

function LevelThree(){
    return (
        <div>
            <h4>Third level</h4>
            <LevelFour/>
        </div>
    )
}

function LevelTwo(){
    return (
        <div>
            <h4>Two level</h4>
            <LevelThree/>
        </div>
    )
}



function Context(props) {
    const userState = useState({
        firstName: "Lech",
        lastName: "K.",
        suffix: 1,
        email: "lechk@wawa.pl"

    })
    return (
        <div>
            <UserContext.Provider value={userState}>

            <LevelTwo/>

            </UserContext.Provider>

        </div>
    );
}

export default Context;
