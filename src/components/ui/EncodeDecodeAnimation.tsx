"use client";
import React, { useEffect, useRef, useState } from "react";

type ReturnPropType = {
  from: string;
  to: string;
  start: number;
  end: number;
  char: string;
};
const EncodeDecodeAnimation = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [displayText, setDisplayText] = useState("");
  const frame = useRef(0);
  const queue = useRef([] as ReturnPropType[]);

  useEffect(() => {
    // Kick off the scramble animation each time the text prop changes.
    scrambleAnimation();
    // Clean up any pending frame updates when the component unmounts.
    return () => cancelAnimationFrame(frame.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const randomChar = () => {
    const chars = "!&#%*@100111000111^></\/~-+,_______";
    return chars[Math.floor(Math.random() * chars.length)];
  };
  const scrambleAnimation = () => {
    const oldText = displayText.padEnd(text.length);
    const newText = text;
    const maxLen = Math.max(oldText.length, newText.length);
    queue.current = [];

    // Prepare a queue where each character resolves between a start and end frame.
    for (let i = 0; i < maxLen; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 80);
      const end = start + Math.floor(Math.random() * 80);
      queue.current.push({ from, to, start, end, char: "" });
    }

    frame.current = 0;
    update();
  };

  const update = () => {
    let output = "";
    let complete = 0;

    for (let i = 0; i < queue.current.length; i++) {
      const { from, to, start, end, char } = queue.current[i];

      if (frame.current >= end) {
        output += to;
        complete++;
      } else if (frame.current >= start) {
        // Change the random character from time to time.
        if (!char || Math.random() < 0.28) {
          const char = randomChar();
          queue.current[i].char = char;
        }
        output += char;
      } else {
        output += from;
      }
    }

    setDisplayText(output);

    if (complete === queue.current.length) {
      return;
    }

    frame.current++;
    requestAnimationFrame(update);
  };

  return (
    <span
      style={{ whiteSpace: "pre" }}
      className={className}
    >
      {displayText}
    </span>
  );
};

export default EncodeDecodeAnimation;
