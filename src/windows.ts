// useWindowControls.ts
import { useState, useRef, useEffect } from "react";

interface Position { x: number; y: number; }
interface Size { width: number; height: number; }

interface WindowControlsOptions {
  initialPosition?: Position;
  initialSize?: Size;
  minWidth?: number;
  minHeight?: number;
}

export function useWindowControls({
  initialPosition = { x: 200, y: 100 },
  initialSize = { width: 400, height: 300 },
  minWidth = 200,
  minHeight = 120,
}: WindowControlsOptions) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);

  const windowRef = useRef<HTMLDivElement | null>(null);

  // drag state
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // resize state
  const [resizing, setResizing] = useState(false);
  const resizeDir = useRef<"right" | "bottom" | "corner" | null>(null);
  const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0 });

  const TASKBAR_HEIGHT = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize || "16");

  // DRAG HANDLERS
  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    dragOffset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    const el = windowRef.current;
    if (!el) return;

    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;

    let newX = e.clientX - dragOffset.current.x;
    let newY = e.clientY - dragOffset.current.y;

    newX = Math.max(0, Math.min(newX, viewportW - el.offsetWidth));
    newY = Math.max(0, Math.min(newY, viewportH - el.offsetHeight - TASKBAR_HEIGHT));

    setPosition({ x: newX, y: newY });
  };

  const stopDrag = () => setDragging(false);

  // RESIZE HANDLERS
  const startResize = (e: React.MouseEvent, dir: "right" | "bottom" | "corner") => {
    e.stopPropagation();
    setResizing(true);
    resizeDir.current = dir;
    resizeStart.current = { x: e.clientX, y: e.clientY, width: size.width, height: size.height };
  };

  const handleResizeMouseMove = (e: MouseEvent) => {
    if (!resizing || !resizeDir.current) return;
    const dx = e.clientX - resizeStart.current.x;
    const dy = e.clientY - resizeStart.current.y;

    let newWidth = resizeStart.current.width;
    let newHeight = resizeStart.current.height;

    if (resizeDir.current === "right" || resizeDir.current === "corner") {
      newWidth = Math.max(minWidth, resizeStart.current.width + dx);
      newWidth = Math.min(newWidth, window.innerWidth - position.x);
    }

    if (resizeDir.current === "bottom" || resizeDir.current === "corner") {
      newHeight = Math.max(minHeight, resizeStart.current.height + dy);
      newHeight = Math.min(newHeight, window.innerHeight - position.y - TASKBAR_HEIGHT);
    }

    setSize({ width: newWidth, height: newHeight });
  };

  const stopResize = () => {
    setResizing(false);
    resizeDir.current = null;
  };

  // GLOBAL LISTENERS
  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [dragging]);

  useEffect(() => {
    if (resizing) {
      window.addEventListener("mousemove", handleResizeMouseMove);
      window.addEventListener("mouseup", stopResize);
    }
    return () => {
      window.removeEventListener("mousemove", handleResizeMouseMove);
      window.removeEventListener("mouseup", stopResize);
    };
  }, [resizing, size, position.x, position.y]);

  return {
    position,
    setPosition,
    size,
    setSize,
    windowRef,
    dragging,
    resizing,
    startDrag,
    startResize,
  };
}
