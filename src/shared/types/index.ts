import React from 'react';

export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;
export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export enum MainRoutesEnum {
  HOME = 'home',
  HISTORY = 'history',
  ANALYTICS = 'analytics',
  UIKIT = 'uikit',
}

export enum RequestStatusEnum {
  LOADING = 'loading',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

export interface IChildren {
  children?: React.ReactNode;
}
