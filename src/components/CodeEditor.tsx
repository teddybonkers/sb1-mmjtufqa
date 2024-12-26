import React from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
}

export function CodeEditor({ value, onChange }: CodeEditorProps) {
  return (
    <div className="h-[500px] w-full border rounded-md overflow-hidden">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />
    </div>
  );
}