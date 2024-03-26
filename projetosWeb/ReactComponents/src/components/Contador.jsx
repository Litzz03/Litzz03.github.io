import React, { useState } from "react";

const Contador = () => {
    const [count,setCount] = useState(0);
    const [text, setText]= useState('')
    
    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {
        if(count > 0){
          setCount(count - 1)
        }
    }
    const showText = (event) =>{
        setText(event.target.value)
    }


    return(
        <>
            Contador:{count}
            <p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            </p>
            <p>
                Digite algo: 
                <input type="text" onChange={showText}></input>
              <p> O texto digitado é:{text}</p> 
           </p>
        </>
    )
}

export default Contador;