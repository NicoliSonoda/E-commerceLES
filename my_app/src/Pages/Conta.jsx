import React from 'react';
import '../Styles/Forms.css';
import { useNavigate } from 'react-router-dom';

function Conta() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cadastro');
      };
    
      const handleClickSenha = () => {
        navigate('/alterarSenha');
      };
    
      const handleClickEnderecos = () => {
        navigate('/alterarEnderecos');
      };

    return(
    <div className="form-cliente">
        <h1>Meus dados</h1>
  
        <form className="form">
        
        
        <div class="form-button-container">
            <button class="form-button" onClick={handleClickSenha}>Alterar senha</button>
        </div>
        <div class="form-button-container">
            <button class="form-button" onClick={handleClickEnderecos}>Alterar endereços</button>
            </div>
        </form>
    </div>
  );
}
export default Conta;