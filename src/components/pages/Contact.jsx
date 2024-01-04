// /src/components/ProductList/ProductTable.js
import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from "axios";

const PAGE_SIZE = 5; // Jumlah item per halaman

const Contact = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const url = "https://dummyjson.com/products?limit=3";
      const response = await axios.get(url);
      console.log(response);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'title', // nama properti di objek produk
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Kategory',
        accessor: 'category',
      },
      // Tambahkan kolom lainnya sesuai kebutuhan
    ],
    []
  );

  const data = React.useMemo(
    () => {
      return products.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        // tambahkan properti lainnya sesuai kebutuhan
      }));
    },
    [products]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: PAGE_SIZE } });

  return (
    <div className="my-4">
      <table {...getTableProps()} className="min-w-full border border-gray-300">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="border px-4 py-2">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border px-4 py-2">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;