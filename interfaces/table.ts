export interface ITableProps {
    columns: {
      header: string;
      accessor?: string;
    }[];
    data: {
      [key: string]: string | number;
    }[];
    className?:string
  }
  