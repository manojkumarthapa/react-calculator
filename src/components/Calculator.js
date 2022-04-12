import React from 'react';

const Calculator = ()=>{
    return(
        <div id='calculator'>
            <div id='calculator-screen'></div>
            <div id='calculator-functions'>
                <div id='calculator-top-operations'></div>
                <div id='calculator-numbers'>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button><sup>+</sup>/<sub>-</sub></button>
                    <button>0</button>
                    <button>=</button>
                </div>
            </div>
            
        </div>
    )
}

export default Calculator;