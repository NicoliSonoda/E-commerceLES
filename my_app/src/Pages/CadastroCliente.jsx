import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../Styles/Forms.css'; 
import { FaTimes, FaPlus, FaTrash } from 'react-icons/fa'; 

function CadastroCliente() {
  const navigate = useNavigate();
  const [showAlertModal, setShowAlertModal] = useState(false); 
  const [cards, setCards] = useState([{ id: 1, number: '', name: '', brand: '', cvv: '' }]);
  const [addresses, setAddresses] = useState([{ id: 1, type: '', streetType: '', street: '', number: '', neighborhood: '', cep: '', country: '', state: '', city: '', observations: '' }]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const openAlertModal = () => {
    setShowAlertModal(true);
  };

  const closeAlertModal = () => {
    setShowAlertModal(false);
  };

  const handleAlertResponse = (response) => {
    closeAlertModal();
    if (response === 'Não') {
      navigate('/CadastroEnderecos'); 
    } else {
      navigate('/DadosConta'); 
    }
  };

  const handleAddCard = () => {
    setCards([...cards, { id: cards.length + 1, number: '', name: '', brand: '', cvv: '' }]);
  };

  const handleRemoveCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleCardChange = (index, field, value) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = value;
    setCards(updatedCards);
  };

  const handleAddAddress = () => {
    setAddresses([...addresses, { id: addresses.length + 1, type: '', streetType: '', street: '', number: '', neighborhood: '', cep: '', country: '', state: '', city: '', observations: '' }]);
  };

  const handleRemoveAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };

  return (
    <div className="cadastro-cliente">
      <h1>Cadastro</h1>

      <form className="cadastro-form">
        <div className="section">
          <h2>Dados Pessoais</h2>
          <div className="field">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div className="field">
            <label>Gênero</label>
            <select>
              <option>Selecione o gênero</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="field">
            <label>Data de nascimento</label>
            <input type="date" />
          </div>
          <div className="field">
            <label>CPF</label>
            <input type="text" placeholder="Digite seu CPF" />
          </div>
          <div className="field">
            <label>Tipo de telefone</label>
            <select>
              <option>Selecione o tipo</option>
              <option>Celular</option>
              <option>Residencial</option>
            </select>
          </div>
          <div className="field">
            <label>DDD</label>
            <input
              type="text"
              maxLength="2"
              onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 2)}
              placeholder="00"
            />
          </div>
          <div className="field">
            <label>Celular</label>
            <input type="text" placeholder="xxxxx-xxxx" />
          </div>
        </div>

  {/* Endereços */}
    <div className="section">
          <h2>Endereço</h2>
          {addresses.map((address, index) => (
            <div key={address.id} className="address-section">
              <div className="field-group">
                <div className="field">
                  <label>Tipo de residência</label>
                  <select
                    value={address.type}
                    onChange={(e) => handleAddressChange(index, 'type', e.target.value)}
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                  </select>
                </div>
                <div className="field">
                  <label>Tipo de logradouro</label>
                  <select
                    value={address.streetType}
                    onChange={(e) => handleAddressChange(index, 'streetType', e.target.value)}
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="Rua">Rua</option>
                    <option value="Avenida">Avenida</option>
                  </select>
                </div>
                <div className="field">
                  <label>Logradouro</label>
                  <input
                    type="text"
                    placeholder="Digite o logradouro"
                    value={address.street}
                    onChange={(e) => handleAddressChange(index, 'street', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Número</label>
                  <input
                    type="text"
                    placeholder="Digite o número"
                    value={address.number}
                    onChange={(e) => handleAddressChange(index, 'number', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Bairro</label>
                  <input
                    type="text"
                    placeholder="Digite o bairro"
                    value={address.neighborhood}
                    onChange={(e) => handleAddressChange(index, 'neighborhood', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>CEP</label>
                  <input
                    type="text"
                    placeholder="Digite o CEP"
                    value={address.cep}
                    onChange={(e) => handleAddressChange(index, 'cep', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>País</label>
                  <select
                    value={address.country}
                    onChange={(e) => handleAddressChange(index, 'country', e.target.value)}
                  >
                    <option value="">Selecione o país</option>
                    <option value="Brasil">Brasil</option>
                  </select>
                </div>
                <div className="field">
                  <label>Estado</label>
                  <select
                    value={address.state}
                    onChange={(e) => handleAddressChange(index, 'state', e.target.value)}
                  >
                    <option value="">Selecione o estado</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="São Paulo">São Paulo</option>
                  </select>
                </div>
                <div className="field">
                  <label>Cidade</label>
                  <select
                    value={address.city}
                    onChange={(e) => handleAddressChange(index, 'city', e.target.value)}
                  >
                    <option value="">Selecione a cidade</option>
                    <option value="Mogi das Cruzes">Mogi das Cruzes</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Suzano">Suzano</option>
                    <option value="Poá">Poá</option>
                  </select>
                </div>
                <div className="field">
                  <label>Observações</label>
                  <textarea
                    placeholder="Digite sua observação"
                    value={address.observations}
                    onChange={(e) => handleAddressChange(index, 'observations', e.target.value)}
                  ></textarea>
                </div>
              </div>
              {index > 0 && (
                <button
                  type="button"
                  className="remove-address-button"
                  onClick={() => handleRemoveAddress(index)}
                >
                  <FaTrash /> Remover Endereço
                </button>
              )}
            </div>
          ))}
          <button type="button" className="add-address-button" onClick={handleAddAddress}>
            <FaPlus /> Adicionar Endereço
          </button>
        </div>


        {/* Login */}
        <div className="section">
          <h2>Login</h2>
          <div className="field">
            <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="field">
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <div className="field">
            <label>Confirmação de Senha</label>
            <input type="password" placeholder="Confirme sua senha" />
          </div>
        </div>

        <div className="section">
          <h2>Cartão de crédito</h2>
          {cards.map((card, index) => (
            <div key={card.id} className="card-section">
              <div className="field-group">
                <div className="field">
                  <label>Número do cartão</label>
                  <input
                    type="text"
                    placeholder="Digite o número do cartão"
                    value={card.number}
                    onChange={(e) => handleCardChange(index, 'number', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Nome impresso</label>
                  <input
                    type="text"
                    placeholder="Digite o nome impresso no cartão"
                    value={card.name}
                    onChange={(e) => handleCardChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Bandeira</label>
                  <select
                    value={card.brand}
                    onChange={(e) => handleCardChange(index, 'brand', e.target.value)}
                  >
                    <option value="">Selecione a bandeira</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Elo">Elo</option>
                  </select>
                </div>
                <div className="field">
                  <label>Código de segurança</label>
                  <input
                    type="text"
                    placeholder="Digite o CVV"
                    value={card.cvv}
                    onChange={(e) => handleCardChange(index, 'cvv', e.target.value)}
                  />
                </div>
              </div>
              {index > 0 && (
                <button
                  type="button"
                  className="remove-card-button"
                  onClick={() => handleRemoveCard(index)}
                >
                  <FaTrash /> Remover Cartão
                </button>
              )}
            </div>
          ))}
          <button type="button" className="add-card-button" onClick={handleAddCard}>
            <FaPlus /> Adicionar Cartão
          </button>
        </div>

        <div className="cadastro-button-container">
            <button className="cadastro-button" type="button" onClick={openAlertModal}>Cadastrar</button>
        </div>
      </form>

      <button className="scroll-button" onClick={scrollToBottom}>Descer</button>
      <button className="scroll-button" onClick={scrollToTop}>Subir</button>

      {showAlertModal && (
        <div className="alert-modal">
          <div className="alert-modal-content">
            <span className="close-alert-modal" onClick={closeAlertModal}><FaTimes /></span>
            <h2>Atenção</h2>
            <p>Deseja utilizar o endereço residencial como o de entrega e cobrança?</p>
            <div className="alert-modal-buttons">
              <button className="alert-modal-button alert-modal-button-no" onClick={() => handleAlertResponse('Não')}>Não</button>
              <button className="alert-modal-button alert-modal-button-yes" onClick={() => handleAlertResponse('Sim')}>Sim</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CadastroCliente;
