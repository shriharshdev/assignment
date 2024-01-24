import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function VendorEdit() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    accountNum: '',
    bankName: '',
    address: '',
    country: '',
    city: '',
    code: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        console.log(id);
        console.log('Fetching vendor data for editing...');
        const response = await axios.get(`http://localhost:3000/bank/${id}`);
        console.log(response);
        console.log('Vendor data:', response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching vendor data:', error);
        setError('Failed to load vendor data');
      }
    };

    fetchVendorData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`http://localhost:3000/bank/${id}`, formData);
      console.log('Update response:', response);
      setFormData({
        name: '',
        accountNum: '',
        bankName: '',
        address: '',
        country: '',
        city: '',
        code: '',
      });
      setError(null);
      navigate("/vendors")
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Error updating vendor. Please check your inputs and try again.');
    }
  };

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
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
        <button type="submit">Update Vendor</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default VendorEdit;


