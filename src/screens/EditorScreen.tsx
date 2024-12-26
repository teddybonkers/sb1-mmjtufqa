import React, { useState } from 'react';
import { ScrollView, StackLayout, TextView, Button } from '@nativescript/core';
import { saveCustomLogic } from '../utils/storage';

export function EditorScreen() {
  const [code, setCode] = useState('');

  const handleSave = async () => {
    try {
      await saveCustomLogic(code);
      alert('Code saved successfully!');
    } catch (error) {
      alert('Failed to save code: ' + error.message);
    }
  };

  return (
    <ScrollView>
      <StackLayout class="p-20">
        <TextView
          hint="Enter your custom prediction logic here..."
          text={code}
          onTextChange={(args) => setCode(args.value)}
          class="code-editor m-b-20"
          editable={true}
          autocorrect={false}
          autocapitalizationType="none"
          style="height: 300"
        />
        <Button text="Save Changes" onTap={handleSave} class="btn btn-primary" />
      </StackLayout>
    </ScrollView>
  );
}