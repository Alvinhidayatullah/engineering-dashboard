function DataTable() {
  const data = [
    { id: 1, customer: 'John Doe', product: 'Laptop', price: '$999', status: 'Delivered', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', product: 'Smartphone', price: '$699', status: 'Processing', date: '2024-01-14' },
    { id: 3, customer: 'Bob Johnson', product: 'Headphones', price: '$199', status: 'Shipped', date: '2024-01-13' },
    { id: 4, customer: 'Alice Brown', product: 'Tablet', price: '$499', status: 'Delivered', date: '2024-01-12' },
    { id: 5, customer: 'Charlie Wilson', product: 'Monitor', price: '$299', status: 'Pending', date: '2024-01-11' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'green'
      case 'Processing': return 'blue'
      case 'Shipped': return 'orange'
      case 'Pending': return 'red'
      default: return 'gray'
    }
  }

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>#{row.id}</td>
              <td>{row.customer}</td>
              <td>{row.product}</td>
              <td>{row.price}</td>
              <td>
                <span className={`status-badge status-${getStatusColor(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable