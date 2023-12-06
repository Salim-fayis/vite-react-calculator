import React from 'react';
import './Button.css'

function Button({ handleClick, onClear, handleCalculate }) {

    const handleButton = (e) => {
        handleClick(e.target.textContent);
    }

    return (
        <>
            <div className="btn-container">
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={handleButton} >7</button></td>
                            <td><button onClick={handleButton} >8</button></td>
                            <td><button onClick={handleButton} >9</button></td>
                            <td><button onClick={handleButton} >/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={handleButton} >4</button></td>
                            <td><button onClick={handleButton} >5</button></td>
                            <td><button onClick={handleButton} >6</button></td>
                            <td><button onClick={handleButton} >*</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={handleButton} >1</button></td>
                            <td><button onClick={handleButton} >2</button></td>
                            <td><button onClick={handleButton} >3</button></td>
                            <td><button onClick={handleButton} >-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={handleButton} >0</button></td>
                            <td><button onClick={handleButton} >.</button></td>
                            <td><button onClick={handleButton} >+</button></td>
                            <td><button className='operator' onClick={handleCalculate}>=</button></td>

                        </tr>

                    </tbody>
                </table>
                <button onClick={onClear}>c</button>
            </div>
        </>
    )
}

export default Button