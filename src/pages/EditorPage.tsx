import React, { useState, useEffect } from 'react';
import { CodeEditor } from '../components/CodeEditor';
import { saveCode, loadCode, getCodeHistory } from '../utils/fileSystem';
import { Save, Play, History } from 'lucide-react';

export function EditorPage() {
  const [code, setCode] = useState('');
  const [testCode, setTestCode] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [isTestMode, setIsTestMode] = useState(false);

  useEffect(() => {
    loadInitialCode();
    loadCodeHistory();
  }, []);

  const loadInitialCode = async () => {
    const savedCode = await loadCode();
    setCode(savedCode || defaultPredictionCode);
  };

  const loadCodeHistory = async () => {
    const codeHistory = await getCodeHistory();
    setHistory(codeHistory);
  };

  const handleSave = async () => {
    try {
      await saveCode(code, isTestMode);
      alert('Code saved successfully!');
      await loadCodeHistory();
    } catch (error) {
      alert('Failed to save code: ' + error);
    }
  };

  const handleTest = () => {
    setIsTestMode(true);
    setTestCode(code);
  };

  const handleDeploy = async () => {
    try {
      await saveCode(testCode);
      setIsTestMode(false);
      setCode(testCode);
      alert('Changes deployed successfully!');
    } catch (error) {
      alert('Failed to deploy changes: ' + error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {isTestMode ? 'Test Environment' : 'Code Editor'}
          </h1>
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </button>
            {!isTestMode && (
              <button
                onClick={handleTest}
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md"
              >
                <Play className="w-4 h-4 mr-2" />
                Test Changes
              </button>
            )}
            {isTestMode && (
              <button
                onClick={handleDeploy}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Deploy
              </button>
            )}
          </div>
        </div>

        <CodeEditor
          value={isTestMode ? testCode : code}
          onChange={value => isTestMode ? setTestCode(value || '') : setCode(value || '')}
        />

        {history.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              <History className="inline-block w-4 h-4 mr-2" />
              Code History
            </h2>
            <div className="bg-white rounded-md shadow p-4 max-h-40 overflow-y-auto">
              {history.map((file, index) => (
                <div key={index} className="text-sm text-gray-600 hover:bg-gray-50 p-2 rounded">
                  {file}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}