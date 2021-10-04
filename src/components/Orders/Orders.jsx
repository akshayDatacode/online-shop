import React, { useEffect, useState } from 'react'
import { getOrders } from '../../apiServices'

const Orders = () => {
  const [orders, setOrders] = useState()

  useEffect(() => {
    getOrders().then((res) => {
      if (res) {
        setOrders(res.data.orders)
      }
    })
  }, [])

  return (
    <>
      <h1 className="my-3 text-center">Orders List</h1>
      {orders && orders.map((item, i) => (
        <div key={i} className="row m-0 p-md-5 p-2">
          <div className="col-12 p-2 border rounded-lg bg-dark">
            <h6 className="text-white">{item.email}</h6>
            <h6 className="text-success">{item.total} $</h6>
          </div>
        </div>
      ))
      }

    </>
  )
}
export default Orders