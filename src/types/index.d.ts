// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['box-icon']: {
        type?: 'regular' | 'solid' | 'logo';
        name?: string;
        color?: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        rotate?: '90' | '180' | '270';
      };
    }
  }
}
