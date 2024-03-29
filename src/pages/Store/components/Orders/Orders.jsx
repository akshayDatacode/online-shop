import React, { useEffect, useState } from 'react'
import { getOrders } from '../../actions'

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
        <div key={i} className="row mx-0 p-md-5 p-2">
          <div className="col-12 p-2 border rounded-lg bg-dark">
            <h6 className="text-white">{item.email}</h6>
            <h6 className="text-success">Total Amount: {item.total} <i class="fal fa-rupee-sign"></i></h6>
            {
              item.order.map((p, i) => (
                <div className>
                  <ul>
                    <li className="text-white">{p.title}</li>
                  </ul>
                  <p></p>
                </div>

              ))
            }
          </div>
        </div>
      ))
      }

    </>
  )
}
export default Orders