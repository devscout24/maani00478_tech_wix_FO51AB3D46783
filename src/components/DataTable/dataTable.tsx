import {
  type ColumnDef,
  type SortingState,
  type Table as TanStackTableType,
  getSortedRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  type ForwardedRef,
} from "react";
import { ScrollArea } from "../ui/scroll-area";
import AppPagination from "../AppPagination";

export interface DataTableHandle<TData> {
  table: TanStackTableType<TData>;
}

export interface DataTableProps<TData, TValue> {
  height?: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  filterColumn?: string;
  page: number;
  limit: number;
  total: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  actions?: (row: TData) => React.ReactNode;
  isPagination?: boolean;
}

function DataTableInner<TData, TValue>(
  {
    height = "600px",
    columns,
    data,
    isLoading = false,
    page,
    limit,
    total,
    onPageChange,
    actions,
    isPagination = true,
  }: DataTableProps<TData, TValue>,
  ref: ForwardedRef<DataTableHandle<TData>>
) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination: {
        pageIndex: page - 1,
        pageSize: limit,
      },
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: Math.ceil(total / limit),
  });

  useImperativeHandle(ref, () => ({ table }), [table]);

  const renderSkeleton = () =>
    [...Array(limit)].map((_, rowIndex) => (
      <TableRow key={`skeleton-${rowIndex}`} className="h-16">
        {columns.map((_, colIndex) => (
          <TableCell key={`skeleton-cell-${colIndex}`}>
            <Skeleton className="h-4 w-full" />
          </TableCell>
        ))}
        {actions && (
          <TableCell className="text-right">
            <Skeleton className="h-8 w-8 rounded-full" />
          </TableCell>
        )}
      </TableRow>
    ));

  return (
    <div className="rounded-lg">
      <ScrollArea className={`h-[${height}] w-full`}>
        <Table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
                {/* {actions && (
                  <TableHead className="px-4 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </TableHead>
                )} */}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="divide-y divide-gray-200">
            {isLoading ? (
              renderSkeleton()
            ) : table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="h-16 hover:bg-muted"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-4 py-3 whitespace-nowrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  {actions && (
                    <TableCell className="px-4 py-3 text-right">
                      {actions(row.original)}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (actions ? 1 : 0)}
                  className="h-24 text-center text-gray-500"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      {isPagination && (
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 bg-white">
          <div className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(page - 1) * limit + 1}</span> to{" "}
            <span className="font-medium">{Math.min(page * limit, total)}</span>{" "}
            of <span className="font-medium">{total}</span> results
          </div>
          <AppPagination
            total={total}
            limit={limit}
            page={page}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}

export const DataTable = forwardRef(DataTableInner) as <
  TData,
  TValue = unknown
>(
  props: DataTableProps<TData, TValue> & {
    ref?: React.Ref<DataTableHandle<TData>>;
  }
) => ReturnType<typeof DataTableInner>;
