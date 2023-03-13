import React from 'react';
import '../../styles/Table.css';

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id.</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Salario</th>
            <th>Fecha</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button"
                  >
                    Editar
                  </button>
                </td>
                <td className="text-left">
                  <button 
                    onClick={() => handleDelete(employee.id)}
                    className="btn btn-danger" 
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No hay Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
