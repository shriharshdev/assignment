import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function VendorForms() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    accountNum: '',
    bankName: '',
    address: '',
    country: '',
    city: '',
    code: ''
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/bank/add", formData);
      console.log(response);
      setFormData({
        name: '',
        accountNum: '',
        bankName: '',
        address: '',
        country: '',
        city: '',
        code: ''
      });
      setError(null);
      navigate("/")
    } catch (error) {
      console.log(error);
      setError("Error submitting the form. Please check your inputs and try again.");
    }
  };

  return (
    <div>
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new vendor</h3>
      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Account Number</label>
      <input type="text" name="accountNum" value={formData.accountNum} onChange={handleChange} />
      <label>Bank Name</label>
      <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} />
      <label>Address</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} />
      <label>Country</label>
      <input type="text" name="country" value={formData.country} onChange={handleChange} />
      <label>City</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
      <label>Zipcode</label>
      <input type="text" name="code" value={formData.code} onChange={handleChange} />
      <button type="submit">Add Vendor</button>
    </form>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default VendorForms;
