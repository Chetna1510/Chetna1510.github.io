import { useState, useEffect } from 'react';

/**
 * Animates through an array of words with a typewriter effect.
 * @param {string[]} words - Words to cycle through
 * @param {number}   speed - Typing speed in ms (default 90)
 * @param {number}   pause - Pause at full word in ms (default 1800)
 * @returns {string} The currently displayed text
 */
export default function useTypewriter(words, speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wi, setWi]           = useState(0);
  const [ci, setCi]           = useState(0);
  const [del, setDel]         = useState(false);

  useEffect(() => {
    const word = words[wi];
    let timeout;

    if (!del && ci < word.length) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, ci + 1)); setCi(c => c + 1); }, speed);
    } else if (!del && ci === word.length) {
      timeout = setTimeout(() => setDel(true), pause);
    } else if (del && ci > 0) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, ci - 1)); setCi(c => c - 1); }, speed / 2);
    } else if (del && ci === 0) {
      setDel(false);
      setWi(w => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [ci, del, wi]);

  return display;
}
