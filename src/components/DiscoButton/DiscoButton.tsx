import { useState } from 'react';
import './style.css'

export const DiscoButton = () => {

    const [isDisco, setToggle] = useState(false)

    return (    
        <div 
            className={isDisco ? "discobutton" : "regularbutton"}
            onClick={() => setToggle(!isDisco)}>
                Toggle disco
        </div>
    )
}