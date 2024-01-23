import{ useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; 

function VendorDetails() {
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      const shouldDelete = window.confirm('Are you sure you want to delete this vendor?');
      if (shouldDelete) {
        await axios.delete(`http://localhost:3000/bank/${id}`);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  useEffect(() => {
    console.log(id)
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
          <button className='delButton' onClick={handleDelete}>Delete</button>
                <Link to={`/edit/${id}`}>
                  <button className='editButton'>Edit</button>
                </Link>
        </div>
      )}
    </div>
  );
}

export default VendorDetails;


