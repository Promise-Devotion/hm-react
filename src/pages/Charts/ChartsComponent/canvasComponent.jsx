import React from "react";
export default function CanvasConponent(params) {
  const canvasRef = React.useRef();
  return (
    <canvas
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
