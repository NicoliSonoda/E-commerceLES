import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Styles/Forms.css'; 

function AlterarSenha() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const openSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const handleSuccessModalOk = () => {
    setShowSuccessModal(false);
    navigate('/DadosConta');
  };

  return (
    <div className="cadastro-cliente">
      <h1>Alterar senha</h1>

      <form className="cadastro-form">
        <div className="section">
          <h2>Login</h2>
          <div className="field">
            <label>Nova senha</label>
            <input type="password" placeholder="Digite sua nova senha" />
          </div>
          <div className="field">
            <label>Confirmação de nova senha</label>
            <input type="password" placeholder="Confirme sua nova senha" />
          </div>
        </div>

        <div className="cadastro-button-container">
          <button className="cadastro-button" type="button" onClick={openSuccessModal}>Salvar</button>
        </div>

        <div className="form-button-container">
          <button className="form-button" type="button" onClick={() => navigate(-1)}>Cancelar</button>
        </div>
      </form>

      <button className="scroll-button" onClick={scrollToBottom}>Descer</button>
      <button className="scroll-button" onClick={scrollToTop}>Subir</button>

      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <h2>Sucesso!</h2>
            <p>Senha foi alterada com sucesso!</p>
            <button className="success-modal-button" type="button" onClick={handleSuccessModalOk}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlterarSenha;
