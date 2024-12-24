// // src/components/DataTable.tsx
// import React from 'react';

// interface DataRow {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     address: string;
//     phone: string;
// }

// const DataTable: React.FC<{ data: DataRow[] }> = ({ data }) => {
//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse border border-gray-300">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 px-4 py-2">ID</th>
//                         <th className="border border-gray-300 px-4 py-2">Name</th>
//                         <th className="border border-gray-300 px-4 py-2">Age</th>
//                         <th className="border border-gray-300 px-4 py-2">Email</th>
//                         <th className="border border-gray-300 px-4 py-2">Address</th>
//                         <th className="border border-gray-300 px-4 py-2">Phone</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map(row => (
//                         <tr key={row.id} className="hover:bg-gray-50">
//                             <td className="border border-gray-300 px-4 py-2">{row.id}</td>
//                             <td className="border border-gray-300 px-4 py-2">{row.name}</td>
//                             <td className="border border-gray-300 px-4 py-2">{row.age}</td>
//                             <td className="border border-gray-300 px-4 py-2">{row.email}</td>
//                             <td className="border border-gray-300 px-4 py-2">{row.address}</td>
//                             <td className="border border-gray-300 px-4 py-2">{row.phone}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default DataTable;
import React from 'react'

const Table = () => {
  return (
    <div>Table</div>
  )
}

export default Table