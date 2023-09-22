import './style.scss';
import Breadcrumb from '../../../components/Breadcrumb';
import FormField from '../../../components/FormField';
import ProfileIcon from '../../../assets/icons/profile.png';
import EmailIcon from '../../../assets/icons/email.png';
import PasswordIcon from '../../../assets/icons/password.png';
import { useState } from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const changeHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="edit-profile">
      <Breadcrumb to="/profile">Edit Profile</Breadcrumb>
      <FormField
        name="name"
        value={formData.name}
        changeHandler={changeHandler}
        placeholder="Name"
        icon={ProfileIcon}
      />
      <FormField
        name="email"
        value={formData.email}
        changeHandler={changeHandler}
        placeholder="Email"
        icon={EmailIcon}
      />
      <FormField
        name="password"
        value={formData.password}
        changeHandler={changeHandler}
        placeholder="Password"
        icon={PasswordIcon}
      />
      <div className="update-btn">
        <ButtonPrimary>Update</ButtonPrimary>
      </div>
    </div>
  );
}
