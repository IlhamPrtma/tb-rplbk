import React from 'react';
import './About.css';
import dev from './dev.jpg';


const Profile = () => {

  return (
    <div className="about">
      <div className="about-app">
        <h1>About <span>APP</span></h1><br />
        <h2>This application will display various types of food.</h2>
        <h2>This application also provides recipes from the food you choose.</h2>
        <h2>There are also instructions and videos on how to make it.</h2>
        <h2>So you can make the food you want.</h2><br />
        <h3>Enjoy it</h3><br />
      </div>
      <div className="about-dev">
        <h1> About Me </h1>

      </div>
      <div className="dev-pro">
        <img src={dev} alt="" />
        <div className="dev-id">
          <div className="a">
            <h4>Name </h4><br />
            <h4>NIM </h4><br />
            <h4>University </h4><br />
            <h4>Faculty </h4><br />
            <h4>Major </h4>
          </div>
          <div className="b">
            <h4>: Ilham Pratama</h4><br />
            <h4>: 21120120130060</h4><br />
            <h4>: Diponegoro University</h4><br />
            <h4>: Faculty of Engineering</h4><br />
            <h4>: Computer Engineering</h4>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile