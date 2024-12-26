import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const CUSTOM_CODE_DIR = 'custom-code';
const TEST_CODE_DIR = 'test-code';

export async function saveCode(code: string, isTest: boolean = false): Promise<void> {
  const directory = isTest ? TEST_CODE_DIR : CUSTOM_CODE_DIR;
  const timestamp = new Date().toISOString();
  
  try {
    await Filesystem.writeFile({
      path: `${directory}/code-${timestamp}.js`,
      data: code,
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    });
  } catch (error) {
    throw new Error(`Failed to save code: ${error}`);
  }
}

export async function loadCode(isTest: boolean = false): Promise<string> {
  const directory = isTest ? TEST_CODE_DIR : CUSTOM_CODE_DIR;
  
  try {
    const result = await Filesystem.readFile({
      path: `${directory}/latest.js`,
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    });
    return result.data;
  } catch {
    return '';
  }
}

export async function getCodeHistory(): Promise<string[]> {
  try {
    const result = await Filesystem.readdir({
      path: CUSTOM_CODE_DIR,
      directory: Directory.Documents
    });
    return result.files.map(file => file.name).sort().reverse();
  } catch {
    return [];
  }
}