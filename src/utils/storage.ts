import { ApplicationSettings } from '@nativescript/core';

const CUSTOM_LOGIC_KEY = 'custom_prediction_logic';

export const saveCustomLogic = async (code: string): Promise<void> => {
  try {
    ApplicationSettings.setString(CUSTOM_LOGIC_KEY, code);
  } catch (error) {
    throw new Error('Failed to save custom logic');
  }
};

export const loadCustomLogic = (): string => {
  try {
    return ApplicationSettings.getString(CUSTOM_LOGIC_KEY) || '';
  } catch (error) {
    return '';
  }
};