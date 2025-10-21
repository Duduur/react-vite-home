import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecuperarSenha.css';
import emailIcon from '../assets/email.png';

function RecuperarSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Por favor, insira seu email');
      return;
    }

    // Criar notificação de sucesso
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.textContent = 'Email de recuperação enviado com sucesso!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
        navigate('/login');
      }, 300);
    }, 2000);
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="recuperar-container">
      <div className="recuperar-content">
        <div className="recuperar-card">
          <h1 className="recuperar-title">Recuperar Senha</h1>
          <p className="recuperar-subtitle">
            Digite seu email e enviaremos instruções para redefinir sua senha
          </p>

          <form onSubmit={handleSubmit} className="recuperar-form">
            <div className="input-group-recuperar">
              <img src={emailIcon} alt="Email" className="input-icon-img-recuperar" />
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="recuperar-input"
              />
            </div>

            <button type="submit" className="recuperar-btn">
              ENVIAR EMAIL
            </button>

            <button 
              type="button" 
              className="back-to-login-btn" 
              onClick={handleBackToLogin}
            >
              Voltar para Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecuperarSenha;
