/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonUno({ children }: ButtonInicioProps) {
  return (
    <button className="hidden border-[2px] border-orange-500 sm:p-[16px] md:block md:p-[16px]">
      {children}
    </button>
  );
}