import React, { Consumer, Provider } from 'react';

declare module "react" {

  interface Context<T> {
    Provider: Provider<T>;
    Consumer: Consumer<T>;
  }

  function createContext<T>(defaultValue: T, calculateChangedBits?: (prev: T, next: T) => number): Context<T>;
}