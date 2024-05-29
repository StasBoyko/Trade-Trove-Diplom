// ProfileView.jsx
import '../Pages.css';
import React from 'react';
const ProfileView = ({user}) => {

    function inf (){
        console.log(user);
    }

    return (
        <div className="profile-container">
            <h2 className="profile-title">Профіль користувача {user.firstname}</h2>
            <button className="profile-button" onClick={inf}>Показати інформацію про користувача</button>
            <div className="profile-info">
                <p className="profile-info-item">Ім'я: {user.firstname}</p>
                <p className="profile-info-item">Прізвище: {user.lastname}</p>
                <p className="profile-info-item">Пошта: {user.email}</p>
                <p className="profile-info-item">Дата створення акаунту: {new Date(user.createdAt).toLocaleDateString()}</p>
                {/* Додайте інші дані профілю тут */}
            </div>
        </div>
    );
};

export default ProfileView;
