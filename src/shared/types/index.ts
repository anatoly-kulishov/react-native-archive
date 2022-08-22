import React from 'react';

export type Nullable<T> = T | null;
export type Undetectable<T> = T | undefined;
export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimestamp = {
  mood: MoodOptionType;
  timestamp: number;
};

export interface IChildren {
  children?: React.ReactNode;
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
