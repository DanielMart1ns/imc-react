import { useEffect, useState } from 'react'
import styles from './Values.module.css'

const InputsValues = ({datasPropsWeight, datasPropsHeight}) =>{

    const getUserWeight=(evt)=>{
        const newWeightValue = parseFloat(evt.target.value)
        datasPropsWeight(newWeightValue)
    }

    const getUserHeight=(evt)=>{
        const newHeightValue = parseFloat(evt.target.value)
        datasPropsHeight(newHeightValue)
    }

    return(
        <>
            <div className={styles.userDataContainer}>
                <label htmlFor="weigh">Peso:</label>
                <input type="number" id="weigh" placeholder='Insira o seu peso (Kg)' className={styles.userData} onChange={getUserWeight}/>
            </div>
            <div className={styles.userDataContainer}>
                <label htmlFor="height">Altura:</label>
                <input type="number" id="height" placeholder='Insira a sua altura (m)' className={styles.userData} onChange={getUserHeight}/>
            </div>
        </>
    )
}

export default InputsValues