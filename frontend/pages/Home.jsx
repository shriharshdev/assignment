import { useEffect, useState } from "react";
import axios from "axios";
import VendorDisplay from '../src/components/VendorDisplay'

function Home() {
  const [vendors, setVendors] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/bank/vendors");
        if (response.status === 200) {
          setVendors(response.data);
        }
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className="home">
      <div className="vendors">
        {vendors &&
          vendors.map((vendor) => (
            <VendorDisplay key={vendor._id} vendor={vendor}/>
          ))}
      </div>
    </div>
  );
}

export default Home;
