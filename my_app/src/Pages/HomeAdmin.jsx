import React, { useState } from 'react';
import { FaSearch, FaEye, FaTimes } from 'react-icons/fa'; 
import '../Styles/HomeAdmin.css';

function HomeAdmin() {
  const [clients, setClients] = useState([
    { id: 1, name: 'Nicoli Sonoda', email: 'nicoli@gmail.com', phoneType: 'Celular', phone: '91111-2222', active: true, state: 'São Paulo', city: 'Suzano' },
    { id: 2, name: 'Rodrigo Gernohovski', email: 'rodrigo@gmail.com', phoneType: 'Celular', phone: '92222-3333', active: false, state: 'São Paulo', city: 'Mogi das Cruzes' },
    { id: 3, name: 'Valverde', email: 'valval@hotmail.com', phoneType: 'Residencial', phone: '4444-5555', active: false, state: 'Minas Gerais', city: 'Juiz de Fora' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);

  const handleStatusChange = (id) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === id ? { ...client, active: !client.active } : client
      )
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewDetails = (client) => {
    setSelectedClient(client);
  };

  const closeModal = () => {
    setSelectedClient(null);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phoneType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  return (
    <div className="home-container">
      <h1>Clientes</h1>

      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Procurar por nome, e-mail, tipo de telefone ou número do telefone"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="client-list-card">
        <table className="client-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Tipo de Telefone</th>
              <th>Telefone</th>
              <th>Status</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phoneType}</td>
                <td>{client.phone}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={client.active}
                      onChange={() => handleStatusChange(client.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button className="details-button" onClick={() => handleViewDetails(client)}>
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedClient && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}><FaTimes /></span>
            <h2>Detalhes do Cliente</h2>
            <p><strong>Nome:</strong> {selectedClient.name}</p>
            <p><strong>Email:</strong> {selectedClient.email}</p>
            <p><strong>Tipo de Telefone:</strong> {selectedClient.phoneType}</p>
            <p><strong>Telefone:</strong> {selectedClient.phone}</p>
            <p><strong>Estado:</strong> {selectedClient.state}</p>
            <p><strong>Cidade:</strong> {selectedClient.city}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeAdmin;
