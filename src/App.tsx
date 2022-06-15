import { CharacterUnitWidthInput } from './CharacterUnitWidthInput/CharacterUnitWidthInput';
import { CalculatedWidthInput } from './CalculatedWidthInput/CalculatedWidthInput';

import styles from './App.module.css';

export const App = (): JSX.Element => (
  <div className={styles.content}>
    <label>Character unit width</label>
    <div className={styles.inputContainer}>
      <CharacterUnitWidthInput />
    </div>
    <label>Calculated width</label>
    <div className={styles.inputContainer}>
      <CalculatedWidthInput />
    </div>
  </div>
);
