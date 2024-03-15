import styles from './Results.module.css'

const Results = ({weight, height}) => {
    const imc = weight / (height * height)

    const getStatus = () =>{
        if(imc < 18.5){
            return "Abaixo da média"
        }
        else if(imc >= 18.5 && imc <= 25){
            return 'Normal'
        }
        else if(imc >= 25 && imc <= 30){
            return 'Sobrepeso'
        }
        else if(imc >= 30 && imc <= 40){
            return 'Obesidade'
        }
        else if(imc >= 40){
            return 'Obesidade Grave'
        }
    }   

    const getValidation = () =>{
        if(imc === undefined || imc === null || isNaN(imc)){
            return false
        }
        else{
            return true
        }
    }

    const imcStatus = getStatus()
    const resultIsAble = getValidation()

    return(
        <>
            {!resultIsAble &&(
                <div>
                    <h3 className={styles.errorTitle}>Valores inválidos, por favor, insira valores corretos.</h3>
                    <p className={styles.exampleInfo}>
                        Exemplo: <br />
                        Peso 70 <br />
                        Altura 1.76 <br />
                    </p>
                </div>
            )}

            {resultIsAble && (
                <>
                    <div className={styles.resultsContainer}>
                        <h2>O seu IMC é: {imc.toFixed(2)}</h2>
                        <h2>{imcStatus}</h2>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th colSpan={2}>Consulte os índices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.lineTable}>
                                <td className={styles.spaceColumns}>Entre 18,5 e 24,9</td>
                                <td className={styles.spaceColumns}>Normal</td>
                            </tr>
                            <tr className={styles.lineTable}>
                                <td className={styles.spaceColumns}>Entre 25,0 e 29,9</td>
                                <td className={styles.spaceColumns}>Sobrepeso</td>
                            </tr>
                            <tr className={styles.lineTable}>
                                <td className={styles.spaceColumns}>Entre 30,0 e 39,9</td>
                                <td className={styles.spaceColumns}>Obesidade</td>
                            </tr>
                            <tr className={styles.lineTable}>
                                <td className={styles.spaceColumns}>Maior que 40,0</td>
                                <td className={styles.spaceColumns}>Obesidade Grave</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </>
    )
}

export default Results