import { ChangeEventHandler, useEffect, useState } from 'react';

import styles from './CharacterUnitWidthInput.module.css';

const PLACEHOLDER_TEXT = 'Type something...';

export const CharacterUnitWidthInput = (): JSX.Element => {
  const [value, setValue] = useState('');
  const [inputWidth, setInputWidth] = useState('auto');

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const textToRender = value.length > 0 ? value : PLACEHOLDER_TEXT;
    setInputWidth(`${textToRender.length}ch`);
  }, [value]);

  return (
    <div className={styles.inputContainer}>
      <input
        onChange={onChange}
        placeholder={PLACEHOLDER_TEXT}
        style={{ width: inputWidth }}
        value={value}
      />
    </div>
  );
};
