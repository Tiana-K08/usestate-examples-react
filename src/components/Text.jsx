import { useState } from 'react';
import './Text.css';
import Button from './Button.jsx';

function Text() {
  const [textColor, setTextColor] = useState({ color: 'black' });

  const handleTextRed = () => {
    setTextColor({ color: '#de0202' });
  };

  const handleTextBlue = () => {
    setTextColor({ color: '#0505e3' });
  };

  const handleTextGreen = () => {
    setTextColor({ color: '#05aa2b' });
  };

  return (
    <div className="text-wrapper">
      <h1>Example №2</h1>
      <p style={textColor}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        consectetur dolorem obcaecati debitis culpa ipsam iusto repellat, vero
        accusamus quidem soluta, libero neque totam suscipit? Similique placeat
        perspiciatis iure vero veniam voluptatibus recusandae rem, sed voluptas
        non enim dolore molestiae itaque nobis maiores eaque ipsum provident qui
        rerum, saepe velit ex.
      </p>
      <div className="btn-container">
        <Button onClick={handleTextRed} label="Text Red" />
        <Button onClick={handleTextBlue} label="Text Blue" />
        <Button onClick={handleTextGreen} label="Text Green" />
      </div>
    </div>
  );
}

export default Text;
