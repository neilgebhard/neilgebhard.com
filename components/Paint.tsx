import { useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

let x;
let y;
let color = "black";
let isPressed = false;

const Paint = () => {
  const canvasRef = useRef(null!);
  const [strokeSize, setStrokeSize] = useState(1);
  const size = useWindowSize();

  const drawCircle = (x, y) => {
    let ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, strokeSize, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };

  const drawLine = (x1, y1, x2, y2) => {
    let ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = strokeSize * 2;
    ctx.stroke();
  };

  const mouseDownHandler = (e) => {
    isPressed = true;
    x = e.nativeEvent.offsetX;
    y = e.nativeEvent.offsetY;
  };

  const mouseUpHandler = (e) => {
    isPressed = false;
    x = null;
    y = null;
  };

  const mouseMoveHandler = (e) => {
    if (isPressed) {
      const x2 = e.nativeEvent.offsetX;
      const y2 = e.nativeEvent.offsetY;

      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);

      x = x2;
      y = y2;
    }
  };

  return (
    <canvas
      width={size.width - 20}
      height={630}
      ref={canvasRef}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      className="absolute cursor-crosshair"
    ></canvas>
  );
};

export default Paint;
