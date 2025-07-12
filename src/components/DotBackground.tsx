import { useEffect, useRef } from "react";

const DotBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const spacing = 40;
    const radius = 1;
    const dots: { x: number; y: number }[] = [];

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        dots.push({ x, y });
      }
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const distance = (x1: number, y1: number, x2: number, y2: number) =>
      Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const dot of dots) {
        const dist = distance(dot.x, dot.y, mouse.current.x, mouse.current.y);
        const color = dist < 100 ? "#16a34a" : "#ccc"; // vert ou gris
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
    />
  );
};

export default DotBackground;
