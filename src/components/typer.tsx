/*
Adapted from https://github.com/YiDaoJ/react-moving-text/blob/09685fc544da923fd0b451c55b4ae60b16c468bf/src/typer.js
License ISC: https://github.com/YiDaoJ/react-moving-text/blob/09685fc544da923fd0b451c55b4ae60b16c468bf/package.json

ISC License

Copyright 2020 YiDaoJ

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface TyperProps {
  heading: string;
  dataText: string[];
  cursorColor?: string;
}

export const Typer = ({ heading = "", dataText, cursorColor }: TyperProps) => {
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(timer);
  });

  const handleType = () => {
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <div>
      {/* {heading}&nbsp; */}
      <span className="tw-font-bold tw-italic tw-text-black tw-text-[48px]">{text}</span>
      <Cursor cursorColor={cursorColor}></Cursor>
    </div>
  );
};

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const Cursor = styled.span`
  margin-left: 2px;
  border-left: 4px solid ${(props) => props.cursorColor};
  animation: ${blink} 0.7s steps(1) infinite;
  line-height: 1;
  font-size: 3rem;
`;
