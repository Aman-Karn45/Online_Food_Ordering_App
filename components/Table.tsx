
import { ITableProps } from '@/interfaces/table';
import React from 'react';


const Table: React.FC<ITableProps> = (props: ITableProps) => {
  return (
    <div className={`overflow-x-auto  ${props?.className}`}>
      <table className={`min-w-full divide-y divide-gray-200`}>
        <thead className="bg-gray-50">
          <tr>
            {props?.columns.map((col) => (
              <th
                key={col.accessor}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {props?.data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {props?.columns.map((col) => (
                <td key={col.accessor} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row[col.accessor as keyof typeof row]}
                </td>

              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
