import React, { useRef, useEffect } from "react";
const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const renderCurrentState = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      const wid = 1000 / arr.length,
        x0 = i * wid;
      drawUnit("#03045eff", x0, 0, wid, arr[i]);
    }
  };
  const drawUnit = (color, x0, y0, wid, higt) => {
    contextRef.current.clearRect(x0, y0, wid, 720);
    contextRef.current.fillStyle = color;
    contextRef.current.fillRect(x0, y0, wid, higt);
  };
  useEffect(() => {
    canvasRef.current.width = 1000;
    canvasRef.current.height = 720;
    contextRef.current = canvasRef.current.getContext("2d");
  }, []);
  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};
export default Canvas;
