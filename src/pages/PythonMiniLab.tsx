// src/pages/PythonMiniLab.tsx
import { useEffect, useState } from 'react';

const PythonMiniLab: React.FC = () => {
  const [pyodide, setPyodide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState<string>('print("Hello, Python mini lab!")');
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const pyodide = await (window as any).loadPyodide();
      setPyodide(pyodide);
      setLoading(false);
    };
    load();
  }, []);

  const runCode = async () => {
    if (!pyodide) return;
    try {
      const result = await pyodide.runPythonAsync(code);
      setOutput(result?.toString() ?? '');
    } catch (err: any) {
      setOutput(err.toString());
    }
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <h2>🐍 Python Mini Lab</h2>
      {loading ? (
        <p>🔄 Đang tải trình thông dịch Python (Pyodide)...</p>
      ) : (
        <>
          <textarea
            rows={10}
            cols={70}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ fontFamily: 'monospace', fontSize: '14px' }}
          />
          <br />
          <button onClick={runCode} style={{ marginTop: '10px' }}>▶ Chạy Code</button>
          <h3>Kết quả:</h3>
          <pre style={{ background: '#eee', padding: '10px' }}>{output}</pre>
        </>
      )}
    </div>
  );
};

export default PythonMiniLab;
