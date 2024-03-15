import InputsValues from './components/Values/inputsValues'
import Results from './components/Results/Results'
import styles from './app.module.css'
import { useEffect, useState } from 'react'

function App() {
  const [weightData, setWeightData] = useState('')
  const [heightData, setHeightData] = useState('')
  const [showBtn, setBtnVisibility] = useState(true)
  const [showResult, setResultsVisibility] = useState(false)

  const weightDataFromInput = (userWeight) =>{
    setWeightData(userWeight)
  }

  const heightDataFromInput = (userHeight) =>{
    setHeightData(userHeight)
  }

  return (
    <>
      <h1 className={styles.title}>Verifique o seu IMC</h1>
      <InputsValues datasPropsWeight={weightDataFromInput} datasPropsHeight={heightDataFromInput}/>

      {showBtn && (
        <button className={styles.verifyButton} onClick={()=>{setResultsVisibility(!showResult), setBtnVisibility(!showBtn)}}>Verify</button>
      )}

      {showResult && (
          <Results weight={weightData} height={heightData}/>
        )}
    </>
  )
}

export default App