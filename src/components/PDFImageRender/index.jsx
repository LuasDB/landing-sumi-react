import { useEffect, useRef, useState } from 'react';
import { getDocument } from 'pdfjs-dist';
import '../../pdfConfig'; // importa tu configuración aquí

const PDFImageRenderer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPDF = async () => {
      const loadingTask = getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const viewport = page.getViewport({ scale: 2 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;
      setLoading(false);
    };

    loadPDF();
  }, [pdfUrl]);

  return (
    <div>
      {loading && <p>Cargando PDF...</p>}
      <canvas ref={canvasRef} style={{ width: '100%', maxWidth: '600px' }} />
    </div>
  );
};

export default PDFImageRenderer;
