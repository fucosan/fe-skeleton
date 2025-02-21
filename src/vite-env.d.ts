/// <reference types="vite/client" />

import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    pinned?: boolean;
    data?: TData;
    value?: TValue;
  }
}
