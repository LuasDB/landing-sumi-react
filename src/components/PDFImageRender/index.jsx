import { useEffect, useRef, useState } from 'react';
import { getDocument } from 'pdfjs-dist';
import '../../pdfConfig'; // tu configuración

const PDFImageRenderer = ({ pdfUrl, width = 150 }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPDF = async () => {
      setLoading(true);
      const loadingTask = getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const originalViewport = page.getViewport({ scale: 1 });
      const scale = width / originalViewport.width;

      // Evitar rotación inesperada con rotation: 0
      const viewport = page.getViewport({ scale, rotation: 0 });

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const pixelRatio = window.devicePixelRatio || 1;

      // Tamaño interno del canvas multiplicado por pixel ratio para alta resolución
      canvas.width = viewport.width * pixelRatio;
      canvas.height = viewport.height * pixelRatio;

      // Tamaño CSS fijo para evitar distorsión
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      // Resetear transform y escalar contexto para pixel ratio
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvasContext: context, viewport }).promise;

      setLoading(false);
    };

    loadPDF();
  }, [pdfUrl, width]);

  return (
    <div
      style={{
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {loading && <p style={{ fontSize: 12 }}>Cargando PDF...</p>}
      <canvas
        ref={canvasRef}
        style={{
          display: loading ? 'none' : 'block',
          borderRadius: 6,
          background: '#f9f9f9',
        }}
      />
    </div>
  );
};

export default PDFImageRenderer;
