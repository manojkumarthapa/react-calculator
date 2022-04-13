import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'


const Calculator = ()=>{
    const [calculated, setCalculated] = useState("");
    let negative = false;
    const addOperation = (e)=>{
        let clicked = e.target.outerText === "x"? "*": e.target.outerText;
        setCalculated(calculated.concat(clicked));
        console.log(calculated)
    }
    const clearOperationsAll = ()=>{
        setCalculated("")
    }
    const clearOperations = ()=>{
        setCalculated(calculated.slice(0,-1));
    }

    const addAbs = ()=>{
        negative? setCalculated(Math.abs(calculated)) : setCalculated(-Math.abs(calculated));
        negative = !negative;
    }

    const getValue =()=>{
        setCalculated(eval(calculated).toString());
    }
    return(
        <div id='calculator'>
            <div id='calculator-screen'>{calculated}</div>
            <div id='calculator-functions'>
                <div id='calculator-top-operations'>
                    <button className='operator' onClick={addOperation} >%</button>
                    <button className='operator'onClick={clearOperationsAll}>C</button>
                    <button className='operator'onClick={clearOperations}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                    <button className='operator'onClick={addOperation}>/</button>
                </div>
                <div id='calculator-numbers'>
                    <button onClick={addOperation}>7</button>
                    <button onClick={addOperation}>8</button>
                    <button onClick={addOperation}>9</button>
                    <button value ="*" className='operator' onClick={addOperation}>x</button>
                    <button onClick={addOperation}>4</button>
                    <button onClick={addOperation}>5</button>
                    <button onClick={addOperation}>6</button>
                    <button className='operator' onClick={addOperation}>-</button>
                    <button onClick={addOperation}>1</button>
                    <button onClick={addOperation}>2</button>
                    <button onClick={addOperation}>3</button>
                    <button className='operator' onClick={addOperation}>+</button>
                    <button onClick={addAbs}><sup>+</sup>/<sub>-</sub></button>
                    <button onClick={addOperation}>0</button>
                    <button onClick={addOperation}>.</button>
                    <button className='operator' onClick={getValue}>=</button>
                </div>
            </div>
            
        </div>
    )
}

export default Calculator;