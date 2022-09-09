import React from 'react'
import dndCharacter from '../images/dndCharacter.png'
import fantasyTown from '../images/fantasyTown.png'
export default function LandingPage() {
    return(
        <div className='page' style={{display:'flex'}}>
            <img src={dndCharacter} style={{width: '50%', height:'80vh'}}/>
            <img src={fantasyTown} style={{width: '50%', height:'80vh'}}/>

        </div>
    )
}