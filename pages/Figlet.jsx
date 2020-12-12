// Figlet.jsx
import React, { useEffect, useState } from 'react';
import stringify from 'json-stringify-safe';
import figlet from 'figlet';
//import standard from 'figlet/importable-fonts/Standard.js'

// figlet.parseFont('Standard', standard);

export default function Figlet({ text, font = '', ...props }) {
  const [ascii, setAscii] = useState('');

  useEffect(() => {
    figlet.text(text, { font }, (err, data) => {
      if (err) return console.error(err);
      setAscii(data);
    })
  }, [text, font, stringify(props)]);

  return <pre {...props}>{ascii}</pre>
}