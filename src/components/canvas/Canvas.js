import React, { useRef, useEffect } from "react";
import "./canvas.css";

let renderAllElements, renderUnitElement, barWidth;

const Canvas = ({ dimWidth, dimHeight }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const renderCurrentState = (arr) => {
    contextRef.current.clearRect(0, 0, dimWidth, dimHeight);
    const wid = Math.floor(dimWidth / arr.length);
    barWidth = wid;
    for (let i = 0; i < arr.length; i++) {
      const x0 = i * wid;
      drawUnit("#03045eff", x0, 0, wid, arr[i]);
    }
  };
  const drawUnit = (color, x0, y0, wid, higt) => {
    contextRef.current.clearRect(x0, y0, wid, dimHeight);
    contextRef.current.fillStyle = color;
    contextRef.current.fillRect(x0, y0, wid, higt);
  };
  renderAllElements = renderCurrentState;
  renderUnitElement = drawUnit;
  useEffect(() => {
    canvasRef.current.width = dimWidth;
    canvasRef.current.height = dimHeight;
    contextRef.current = canvasRef.current.getContext("2d");
  }, []);
  return (
    <div className="canvas-container" style={{ width: dimWidth + 20 }}>
      <canvas className="canvas-obj" ref={canvasRef}></canvas>
    </div>
  );
};

export { renderAllElements, renderUnitElement, barWidth };
export default Canvas;
