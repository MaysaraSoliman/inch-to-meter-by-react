import { useRef, useState } from 'react';
import './App.css';
import styles from './App.module.css'

function App() {
  let [inchesToMeter, setInchesToMeter] = useState(0);
  let inchesInputRef = useRef();
  function handleConverterInchesToMeterBtn() {
    setInchesToMeter((inchesInputRef.current.value / 39.37).toFixed(4))
  }
  return (
    <>
      <div className={styles.converter}>
        <div className={styles.converterWrapper}>
          <div>
            <h2 className={styles.h2}>Inch-To-Meter Converter</h2>
          </div>
          <div className={styles.inputWrapper}>
            <label
              htmlFor="inchesInput"
              className={styles.label}>
              Number of inches:
            </label>
            <input
              className={styles.input}
              id="inchesInput"
              type='text'
              placeholder='Enter number of inches here..'
              ref={inchesInputRef}
            />
          </div>
          <div>
            <button
              className={styles.button}
              onClick={handleConverterInchesToMeterBtn}>
              Calculate
            </button>
          </div>
          <div>
            <p
              className={styles.result}>
              {inchesToMeter ? `${inchesInputRef.current.value} Inches = ${inchesToMeter}` : "Inches"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
