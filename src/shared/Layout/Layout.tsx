import React from 'react';

interface ILayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
      <div style={{margin: '0 auto', maxWidth: '1400px'}}>{children}</div>
  );
}


