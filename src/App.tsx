import { CharacterUnitWidthInput } from './CharacterUnitWidthInput/CharacterUnitWidthInput';
import { CalculatedWidthInput } from './CalculatedWidthInput/CalculatedWidthInput';

import styles from './App.module.css';

export const App = (): JSX.Element => (
  <div className={styles.content}>
    <label>Character unit width</label>
    <CharacterUnitWidthInput />
    <label>Calculated width</label>
    <CalculatedWidthInput />
  </div>
);
