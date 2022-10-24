import React from "react";
import { useEffect } from "react";
export default function CanvasConponent(params) {
  const canvasRef = React.useRef();
  const draw = () => {
    var canvas = document.getElementById("tutorial");
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    //绘制矩形
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
  };
  useEffect(() => {
    draw();
  }, []);
  return (
    <canvas
      id="tutorial"
      ref={canvasRef}
      width={window.innerWidth - 200}
      height={window.innerHeight - 400}
      onClick={(e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        // implement draw on ctx here
        console.log(ctx);
      }}
    />
  );
}
