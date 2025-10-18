import React, { useState } from 'react'
import Slider from 'react-rangeslider';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';

import { category } from "../../../../utility/options";

const Filter = ({
  handleFilterChange,
  filterQuery,
}) => {
  const [activeTable, setActiveTable] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);

  const toggle = (openTable) => {
    if (openTable === activeTable) {
      return setActiveTable('');
    }
    setActiveTable(openTable)
  }

  const handlePriceRange = (priceRange) => {
    const obj = { target: { name: 'priceRageEnd', value: priceRange } }
    handleFilterChange(obj)
  }

  const handleCategoryChecklist = (event) => {
    const { value } = event.target
    const selected = categoriesList;
    let find = selected.indexOf(value);
    if (find > -1 && selected.length >= 1) {
      selected.splice(find, 1);
    } else if (find === -1) {
      selected.push(value);
    }
    setCategoriesList([...selected])
    const obj = { target: { name: 'categoriesList', value: [...selected] } }
    handleFilterChange(obj)
  }

  const Checkbox = ({ obj, index, handleCategoryChecklist }) => {
    return (
      <div>
        <input
          type="checkbox"
          id={`custom-checkbox-${index}`}
          name={obj.category}
          value={obj.value}
          checked={categoriesList.includes(obj.value)}
          onChange={(e) => handleCategoryChecklist(e)}
        />
        <span>{obj.category}</span>
      </div>
    );
  };

  return (
    <>
      <div className="row mx-0">
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
                  <p>Filter by Product Categories</p>
                  {category && category.map((obj, index) => (
                    <p key={index}>
                      <Checkbox
                        obj={obj}
                        index={index}
                        handleCategoryChecklist={handleCategoryChecklist}
                      />
                    </p>
                  ))}
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
                  <p>Filter By Price</p>
                  <Slider
                    value={filterQuery.priceRageEnd}
                    orientation="horizontal" //vertical
                    onChange={(e) => handlePriceRange(e)}
                  />
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div >
    </>
  )
}

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filterQuery: PropTypes.shape({
    priceRageEnd: PropTypes.number.isRequired,
    categoriesList: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Filter