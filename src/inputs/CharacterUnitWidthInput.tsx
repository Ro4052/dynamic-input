import { ChangeEventHandler, useEffect, useState } from 'react';

import { PLACEHOLDER_TEXT } from './placeholder';
import logo from './sl-pride-logo.jpg';
import styles from './common.module.css';

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
      <img alt='logo' className={styles.logo} src={logo} />
    </div>
  );
};
