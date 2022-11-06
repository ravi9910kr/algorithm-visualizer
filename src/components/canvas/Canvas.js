import { useEffect, useRef, useState } from "react";
import "./canvas.css";

export default function Canvas({ data, objType, width, height, ...props }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const objWidth = objType === "rectangle" ? width / data.length : 5;
  const [isDisplayed, setisDisplayed] = useState(false);

  const drawRectBar = (color, x, y, dW, dH) => {
    const ctx = ctxRef.current;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, dW, dH);
  };
  const renderData = () => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      drawRectBar("#ff0088", index * objWidth, 0, objWidth, element);
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    ctxRef.current = canvas.getContext("2d");
    ctxRef.current.fillStyle = "#aaaaaa";
  }, []);
  return (
    <canvas
      onClick={() => {
        if (isDisplayed) return;
        setisDisplayed(true);
        renderData();
      }}
      ref={canvasRef}
      className="canvas-container"
    ></canvas>
  );
}
