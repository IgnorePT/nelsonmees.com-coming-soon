import { useCallback, useEffect, useRef } from 'react'

function Experiments() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const draw = useCallback((context: CanvasRenderingContext2D): void => {
        context.fillStyle = "#fff";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        context.lineWidth = 4;
        // context.beginPath();
        // context.strokeStyle = "white";
        // context.rect(0, 0, context.canvas.width, context.canvas.height);
        // context.stroke();

        // context.beginPath();
        // context.arc(300, 300, 200, 0, Math.PI * 2);
        // context.stroke();
        const width = 60;
        const height = 60;
        const gap = 20;

        for (let i = 0; i < 5; i++) {

            for (let j = 0; j < 5; j++) {
                const x = 100 + (width + gap) * i;
                const y = 100 + (height + gap) * j;

                context.beginPath();
                context.fillStyle = "black";
                context.rect(x, y, width, height);
                context.stroke();

                if (Math.random() > 0.5) {
                    context.beginPath();
                    context.rect(x + 8, y + 8, width - 16, height - 16);
                    context.stroke();
                }
            }
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext("2d")

            if (context) {
                draw(context);
            }
        }

    }, [draw])

    return (
        <canvas ref={canvasRef} width={600} height={600}></canvas>
    )
}

export default Experiments