import { useState } from 'react';
import './Text.css';
import Button from './Button.jsx';

function Text() {
  const initialColor = '#000000';
  const redColor = '#de0202';
  const blueColor = '#0505e3';
  const greenColor = '#05aa2b';

  const [textColor, setTextColor] = useState(initialColor);

  const buttons = [
    { color: redColor, label: 'Text Red' },
    { color: blueColor, label: 'Text Blue' },
    { color: greenColor, label: 'Text Green' },
  ];

  return (
    <div className="text-wrapper">
      <h1>Example №2</h1>
      <p style={{ color: textColor }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        consectetur dolorem obcaecati debitis culpa ipsam iusto repellat, vero
        accusamus quidem soluta, libero neque totam suscipit? Similique placeat
        perspiciatis iure vero veniam voluptatibus recusandae rem, sed voluptas
        non enim dolore molestiae itaque nobis maiores eaque ipsum provident qui
        rerum, saepe velit ex.
      </p>
      <div className="btn-container">
        {buttons.map((button) => (
          <Button
            key={button.color}
            onClick={() => setTextColor(button.color)}
            label={button.label}
            activeColor={
              textColor === button.color ? button.color : initialColor
            }
          />
        ))}
      </div>
      <div className="btn-container">
        <Button
          onClick={() => setTextColor(initialColor)}
          label="Reset Color"
        />
      </div>
    </div>
  );
}

export default Text;
