import React from 'react';
import { localFactory } from './local-factory';

export function ReturnsCorrectValue() {
  return <div>{localFactory()}</div>;
}
