import{ useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

function VendorDetails() {
  const navigate = useNavigate()
  const handleDelete = async () => {
    try{
        await axios.delete(`http://localhost:3000/bank/${id}`)
        navigate('/')
    }catch(error){
        console.log(error)
    }
  }
  const handleEdit = async () => {
    try {
        await axios.patch(`http://localhost:3000/bank/${id}`)
        navigate('/add')
    } catch (error) {
        console.log(error)
    }
  }
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/bank/${id}`);
        setVendor(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error); 
      }
    };

    fetchVendor();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading vendor details...</p>
      ) : error ? (
        <p>Error fetching vendor: {error.message}</p>
      ) : (
        <div>
          <h2>Vendor Details</h2>
          <p><strong>Name:</strong> {vendor.name}</p>
          <p><strong>Account Number:</strong> {vendor.accountNum}</p>
          <p><strong>Bank:</strong> {vendor.bankName}</p>
          <p><strong>Address:</strong> {vendor.address}</p>
          <p><strong>City:</strong> {vendor.city}</p>
          <p><strong>Country:</strong> {vendor.country}</p>
          <p><strong>Zipcode:</strong> {vendor.code}</p>
        </div>
      )}
        <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    </div>
  );
}

export default VendorDetails;
