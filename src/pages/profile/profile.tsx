import { useEffect, useState } from "react";
import './profile.scss';

import addressess from '../../assets/icons/Sidebar/address.svg';
import payment from '../../assets/icons/Sidebar/card.svg';
import order from '../../assets/icons/Sidebar/order.svg';
import help from '../../assets/icons/Sidebar/help.svg';
import logout from '../../assets/icons/Sidebar/logout.svg';
import terms from '../../assets/icons/Sidebar/book.svg';
import Button from "../../components/button/button";

const Profile = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  let name = "John Doe";

  useEffect(() => {
    const getTimeOfDay = () => {
      const currentTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, timeZone: 'Asia/Kolkata' });
      const hour = parseInt(currentTime.split(':')[0]);

      if (hour >= 5 && hour < 12) {
        setTimeOfDay('Good Morning');
      } else if (hour >= 12 && hour < 17) {
        setTimeOfDay('Good Afternoon');
      } else if (hour >= 17 && hour < 20) {
        setTimeOfDay('Good Evening');
      } else {
        setTimeOfDay('Good Night');
      }
    };

    getTimeOfDay();

  }, []);

  return (
    <div className="page" id="profile">
      <div className="section">
        <h2>{timeOfDay}, {name}</h2>
        <div className="flexbox">
          <div className="sidebar">
            <div className="menuItem">
              <h4>Account</h4>

              <a href="" className="item">
                <img src={addressess} alt="" />
                <p>Addresses</p>
              </a>
              <a href="" className="item">
                <img src={payment} alt="" />
                <p>Payment Methods</p>
              </a>
            </div>
            <div className="menuItem">
              <h4>Orders</h4>

              <a href="" className="item">
                <img src={order} alt="" />
                <p>Orders & Returns</p>
              </a>
            </div>
            <div className="menuItem">
              <h4>Assistance</h4>

              <a href="" className="item">
                <img src={help} alt="" />
                <p>Need Help?</p>
              </a>
              <a href="" className="item">
                <img src={terms} alt="" />
                <p>Terms & Policy</p>
              </a>
            </div>
            <a href="" className="item">
              <img src={logout} alt="" />
              <p>Log Out</p>
            </a>
          </div>
          <div className="editDetails">
            <table>
              <tr>
                <th>Full Name</th>
                <td>NULL</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>NULL</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>NULL</td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>NULL</td>
              </tr>
              <tr>
                <th>Email ID</th>
                <td>NULL</td>
              </tr>
            </table>
            <Button
              text="Edit"
              type="filled"
              color="dark"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
