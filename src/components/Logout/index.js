import React from 'react';
import Swal from 'sweetalert2';

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: 'question',
      title: 'Saliendo de tu cuenta',
      text: '¿Está seguro de que desea cerrar la sesión?',
      showCancelButton: true,
      confirmButtonText: 'Salir',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem('is_authenticated', false);
            setIsAuthenticated(false);
          },
        });
      }
    });
  };

  return (
    <button
      style={{ 
        marginLeft: '12px',
        color: 'white',
        backgroundColor: '#000000',
       }}
      className="muted-button"
      onClick={handleLogout}
    >
      login
    </button>
  );
};

export default Logout;
