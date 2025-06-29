export type TableColumn<T> = {
  header: string;
  accessor: keyof T;
  className?: string;
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
};

export default function Table<T>({
  columns,
  data,
  className = '',
}: TableProps<T>) {
  return (
    <div className={`overflow-x-auto rounded-xl ${className}`}>
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-primary text-white">
            {columns.map((col) => (
              <th
                key={col.header}
                className={`py-3 px-4 text-left font-semibold ${
                  col.className || ''
                }`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 1 ? 'bg-[#eaf7fd]' : 'bg-white'}>
              {columns.map((col) => (
                <td
                  key={col.header}
                  className={`py-3 px-4 ${col.className || ''}`}>
                  {row[col.accessor] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
