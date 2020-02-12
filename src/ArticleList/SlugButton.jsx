import React from "react"
import './SlugButton.module.css'

const SlugButton = ({slugButton})=>{ 
    return (
            <section>   
                <p>
                    <button onClick = {() => alert(slugButton.slug)}>{slugButton.author}
                    </button>
                </p>              
            </section>
    );
  
}

export default SlugButton;