import {Link} from 'react-router-dom'

function VendorDisplay({vendor}) {
  return (
    <div className="vendor-details">
        <h4>
        <Link to={`/bank/${vendor._id}`}>{vendor.name}</Link>
        </h4>
        <p><strong>Account Number</strong> {vendor.accountNum}</p>
        <p><strong>Bank</strong> {vendor.bankName}</p>
    </div>
  )
}

export default VendorDisplay