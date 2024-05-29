import React from 'react';
import { useState } from 'react';
import { registrate } from '../../serverFunction/userRequests'; 
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const RegistrationForm = () => {
  const [confirmPassword, setConfirmPassword] = useState(""); // State для підтвердження паролю
  const [error, setError] = useState(""); // State для помилки підтвердження паролю
  const router = useHistory();
  // State для user
  const [newUser, setNewUser] = useState({ 
    firstname:"",
    lastname:"",
    email:"",
    password:""
  });

  // serv funck
  const handleSubmit = (e) => {
    e.preventDefault();
    const history = window.history;
    if (newUser.password !== confirmPassword) {
      setError("Паролі не співпадають");
      return;
    }
   registrate(newUser);
   router.push('/');
  };

  // Функція для перевірки даних користувача (додана для полегшення розробки)
  const checkData = (User) => {
    console.log('Ім\'я:', User.firstname, '\nПрізвище:', User.lastname, '\nEmail:', User.email,
     '\nPassword:', User.password, '\nConfirm Password:', confirmPassword);
  };

  return (
    <div>
      <h2 style={{textAlign:'center', color:'#218838'}}>Реєстрація нового користувача</h2>
      <form onSubmit={handleSubmit} className='registration-form'>
        <div>
          <label htmlFor="firstname">Ім'я:</label>
          <input
            type="text"
            id="firstname"
            value={newUser.firstname}
            onChange={(e) => setNewUser({...newUser, firstname: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Прізвище:</label>
          <input
            type="text"
            id="lastname"
            value={newUser.lastname}
            onChange={(e) => setNewUser({...newUser, lastname: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Електронна пошта:</label>
          <input
            type="email"
            id="email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={newUser.password}
            onChange={(e) => setNewUser({...newUser, password: e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Підтвердіть пароль:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError(""); // Скидання помилки при зміні значення підтвердження паролю
            }}
            required
          />
          {error && <div className="error">{error}</div>} {/* Відображення помилки */}
        </div>
        <button type="submit" onClick={() => checkData(newUser)}>Зареєструватися</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
