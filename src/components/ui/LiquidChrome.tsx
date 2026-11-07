import React, { useEffect, useRef } from 'react';

interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
}

/**
 * Pure WebGL implementation of the ReactBits LiquidChrome ambient shader background
 * used in the DecodeXtreme 2026 proposal, tuned for INCIDO GEN 3.0's blue palette.
 */
export const LiquidChrome: React.FC<LiquidChromeProps> = ({
  baseColor = [0.74, 0.87, 1.0],
  speed = 0.26,
  amplitude = 0.38,
  frequencyX = 3.0,
  frequencyY = 2.0,
  interactive = false,
  className = '',
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [r, g, b] = baseColor;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl', { alpha: false, antialias: true });
    if (!gl) return;

    const vertexSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
        vec2 fragCoord = uvCoord * uResolution.xy;
        vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

        for (float i = 1.0; i < 10.0; i++) {
          uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
          uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
        }

        vec2 diff = uvCoord - uMouse;
        float dist = length(diff);
        float falloff = exp(-dist * 20.0);
        float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
        uv += (diff / (dist + 0.0001)) * ripple * falloff;

        vec3 color = uBaseColor / max(abs(sin(uTime - uv.y - uv.x)), 0.0001);
        return vec4(color, 1.0);
      }

      void main() {
        vec4 col = vec4(0.0);
        for (int i = -1; i <= 1; i++) {
          for (int j = -1; j <= 1; j++) {
            vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
            col += renderImage(vUv + offset);
          }
        }
        gl_FragColor = col / 9.0;
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // Full-screen triangle
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uResLoc = gl.getUniformLocation(program, 'uResolution');
    const uBaseColorLoc = gl.getUniformLocation(program, 'uBaseColor');
    const uAmpLoc = gl.getUniformLocation(program, 'uAmplitude');
    const uFreqXLoc = gl.getUniformLocation(program, 'uFrequencyX');
    const uFreqYLoc = gl.getUniformLocation(program, 'uFrequencyY');
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse');

    gl.uniform3f(uBaseColorLoc, r, g, b);
    gl.uniform1f(uAmpLoc, amplitude);
    gl.uniform1f(uFreqXLoc, frequencyX);
    gl.uniform1f(uFreqYLoc, frequencyY);
    gl.uniform2f(uMouseLoc, 0, 0);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = 0;
    let elapsed = 0;
    let lastTime = 0;
    let disposed = false;

    const render = () => {
      gl.uniform1f(uTimeLoc, elapsed * 0.001 * speed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(container.clientWidth, 1);
      const h = Math.max(container.clientHeight, 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform3f(uResLoc, canvas.width, canvas.height, canvas.width / canvas.height);
      render();
    };

    const loop = (now: number) => {
      if (disposed) return;
      if (lastTime) {
        elapsed += Math.min(now - lastTime, 100);
      }
      lastTime = now;
      render();
      rafId = requestAnimationFrame(loop);
    };

    const syncLoop = () => {
      cancelAnimationFrame(rafId);
      lastTime = 0;
      if (!reducedMotion.matches && !document.hidden) {
        rafId = requestAnimationFrame(loop);
      } else {
        render();
      }
    };

    const handlePointer = (e: MouseEvent | TouchEvent) => {
      const point = 'touches' in e ? e.touches[0] : e;
      if (!point) return;
      const rect = container.getBoundingClientRect();
      gl.uniform2f(
        uMouseLoc,
        (point.clientX - rect.left) / rect.width,
        1 - (point.clientY - rect.top) / rect.height
      );
    };

    container.appendChild(canvas);
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    syncLoop();

    document.addEventListener('visibilitychange', syncLoop);
    reducedMotion.addEventListener('change', syncLoop);
    if (interactive) {
      container.addEventListener('mousemove', handlePointer);
      container.addEventListener('touchmove', handlePointer, { passive: true });
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncLoop);
      reducedMotion.removeEventListener('change', syncLoop);
      container.removeEventListener('mousemove', handlePointer);
      container.removeEventListener('touchmove', handlePointer);
      canvas.remove();
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [r, g, b, speed, amplitude, frequencyX, frequencyY, interactive]);

  return <div ref={containerRef} className={`liquidChrome-container ${className}`} {...rest} />;
};

