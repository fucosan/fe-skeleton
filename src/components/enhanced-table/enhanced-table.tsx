import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area/scroll-area';
import { cn } from '@/lib/utils';
import { EnhancedPagination } from './enhanced-pagination';

interface EnhancedTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

// https://github.com/shadcn-ui/ui/issues/1151
export const EnhancedTable = <T extends object>({
  data,
  columns,
}: EnhancedTableProps<T>) => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
    },
  });

  return (
    <div className='flex flex-col gap-[22px]'>
      <ScrollArea className='w-[1074px]'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      'text-nowrap',
                      header.column.columnDef.meta?.pinned
                      && 'bg-primary sticky right-0 z-50'
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id} >
                {row.getVisibleCells().map(cell => (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      'max-w-[250px] text-nowrap truncate',
                      cell.column.columnDef.meta?.pinned
                      && 'bg-muted sticky right-0 z-10 p-0 m-0 gap-0'
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table >
        <ScrollBar orientation='horizontal' />
      </ScrollArea >
      <EnhancedPagination table={table} />
    </div>
  );
};
