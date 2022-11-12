import React, { useRef, useEffect } from "react";
import "./canvas.css";
import { DIMENSION, COLORS } from "../../database/DataBase";

let renderAllElements, renderUnitElement, barWidth;

const Canvas = () => {
  const { WIDTH, HEIGHT } = DIMENSION;
  const { FRENCHVIOLET } = COLORS;

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const renderCurrentState = (arr) => {
    contextRef.current.clearRect(0, 0, WIDTH, HEIGHT);
    const wid = Math.floor(WIDTH / arr.length);
    barWidth = wid;
    for (let i = 0; i < arr.length; i++) {
      const x0 = i * wid;
      drawUnit(FRENCHVIOLET, x0, 0, wid, arr[i]);
    }
  };
  const drawUnit = (color, x0, y0, wid, higt) => {
    contextRef.current.clearRect(x0, y0, wid, HEIGHT);
    contextRef.current.fillStyle = color;
    contextRef.current.fillRect(x0, y0, wid, higt);
  };
  renderAllElements = renderCurrentState;
  renderUnitElement = drawUnit;
  useEffect(() => {
    canvasRef.current.width = WIDTH;
    canvasRef.current.height = HEIGHT;
    contextRef.current = canvasRef.current.getContext("2d");
  });
  return (
    <div className="canvas-container" style={{ width: WIDTH + 20 }}>
      <canvas className="canvas-obj" ref={canvasRef}></canvas>
    </div>
  );
};

export { renderAllElements, renderUnitElement, barWidth };
export default Canvas;
