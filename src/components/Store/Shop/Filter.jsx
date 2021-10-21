import React, { useState } from 'react'
import { Collapse } from 'reactstrap';
import CustomRangeSlider from '../../Utils/CustomRangeSlider';

const Filter = () => {
  const [activeTable, setActiveTable] = useState('');

  const toggle = (openTable) => {
    if (openTable === activeTable) {
      return setActiveTable('');
    }
    setActiveTable(openTable)
  }

  return (
    <>
      <div className="row m-0">
        <div className="col-12 px-0">
          <h5 className="p-3 mb-0 bg-secondary text-white  border-bottom">Filter</h5>
          <div className="">
            <div
              onClick={() => toggle('category')}
              className={`m-0 my-4 bg-light d-flex align-items-center carousel-row justify-content-between`}
            >
              <h6 className="h6 px-2">Categories</h6>
              <div className="text-right">
                {activeTable === 'category' ?
                  <i className="fal fa-minus text-dark p-3" />
                  :
                  <i className="fal fa-plus text-dark p-3" />
                }
              </div>
            </div>
            <Collapse isOpen={activeTable === 'category'}>
              <div className="row mx-0">
                <div className="col-12">
                  <p>Filter by Categories</p>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="">
            <div
              onClick={() => toggle('price')}
              className={`m-0 my-4 bg-light d-flex align-items-center carousel-row justify-content-between`}
            >
              <h6 className="h6 px-2">Price</h6>
              <div className="text-right">
                {activeTable === 'price' ?
                  <i className="fal fa-minus text-dark p-3" />
                  :
                  <i className="fal fa-plus text-dark p-3" />
                }
              </div>
            </div>
            <Collapse isOpen={activeTable === 'price'}>
              <div className="row mx-0">
                <div className="col-12">
                  <p>Filter by Price</p>
                  <CustomRangeSlider />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  )
}
export default Filter