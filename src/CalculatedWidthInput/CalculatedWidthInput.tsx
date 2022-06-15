import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styles from './CalculatedWidthInput.module.css';

const PLACEHOLDER_TEXT = 'Type something...';

export const CalculatedWidthInput = (): JSX.Element => {
  const [value, setValue] = useState('');
  const [inputWidth, setInputWidth] = useState('auto');
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (!containerRef.current) {
      setInputWidth('auto');
      return;
    }

    const textToRender = value.length > 0 ? value : PLACEHOLDER_TEXT;
    const tempSpan = document.createElement('span');
    tempSpan.innerHTML = textToRender.replaceAll(' ', '&nbsp;');
    containerRef.current.appendChild(tempSpan);
    setInputWidth(`${tempSpan.getBoundingClientRect().width}px`);
    containerRef.current.removeChild(tempSpan);
  }, [value]);

  return (
    <div className={styles.inputContainer} ref={containerRef}>
      <input
        className={styles.input}
        onChange={onChange}
        placeholder='Type something...'
        style={{ width: inputWidth }}
        value={value}
      />
    </div>
  );
};
