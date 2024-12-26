import { Application } from '@nativescript/core';
import { Navigator } from './src/navigation/Navigator';

Application.run({ create: () => Navigator() });