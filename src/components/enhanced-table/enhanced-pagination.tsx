import { cn } from "@/lib/utils"
import { Table } from '@tanstack/react-table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination/pagination";

interface EnhancedPaginationProps<T extends object> extends React.ComponentProps<"div"> {
  table: Table<T>;
}

const getPageNumbers = (pageCount: number, pageIndex: number): number[] => {
  const start = Math.max(0, pageIndex - 2);
  const end = Math.min(pageCount, start + 5);
  return Array.from({ length: end - start }, (_, i) => start + i + 1);
}

const getRowRange = (pageIndex: number, pageSize: number, rowCount: number): string => {
  if (rowCount < 2 && pageIndex === 0) {
    return rowCount.toString();
  }
  if (rowCount === 1) {
    return rowCount.toString();
  }

  const first = pageIndex * pageSize + 1;
  const last = Math.min((pageIndex + 1) * pageSize, rowCount);
  return `${first}-${last}`;
}

export function EnhancedPagination<T extends object>({
  className,
  table,
  ...props
}: EnhancedPaginationProps<T>) {
  const { pageSize, pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();
  const pageNumbers = getPageNumbers(pageCount, pageIndex);

  return (
    <div
      data-slot="pagination"
      className={cn(
        "flex justify-between items-center mr-9",
        className
      )}
      {...props}
    >
      <span className='w-full text-xs'>
        Currently showing: {
          getRowRange(pageIndex, pageSize, table.getRowCount())
        }
      </span>
      <Pagination className="justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>

          {pageNumbers[0] > 1 && (
            <PaginationItem key={'prev-elipsses'}>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {pageNumbers.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => table.setPageIndex(page - 1)}
                isActive={pageIndex === page - 1}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {pageNumbers[pageNumbers.length - 1] < pageCount && (
            <PaginationItem key={'next-elipses'}>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
