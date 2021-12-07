import { Button, Dropdown, Input, Menu, Select } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../redux/slice/productSlice';
import './FilterProduct.scss';
FilterProduct.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
};

function FilterProduct({ onFilterChange }) {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.product);
    const [valueType, setValueType] = useState('');


    const { Option } = Select;
    const [sort, setSort] = useState('0');

    const [query, setQuery] = useState({
        name: '',
        sortType: '',
        categoryId: ''
    })

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    const handleSelectChange = (value) => {
        setValueType(value);
        setQuery({ ...query, categoryId: value })
    }


    const handleArragePriceClick = ({ key }) => {
        setSort(key);
        setQuery({ ...query, sortType: key })
    }
    useEffect(() => {
        if (onFilterChange) {
            onFilterChange(query);
        }
    }, [query])

    const menu = (
        <Menu onClick={handleArragePriceClick}>
            <Menu.Item key='0'>
                Ascending
            </Menu.Item>
            <Menu.Item key='1'>
                Descending
            </Menu.Item>
        </Menu>

    )
    return (

        <div id='filter-product'>
            <div className="filter-left">
                <div className="filter-name">
                    <label htmlFor="">Name</label>
                    <Input placeholder="Tên sản phẩm" />
                </div>

                <div className="filter-select">
                    Category: &nbsp;
                    <Select style={{ width: 120 }} value={valueType} onChange={handleSelectChange}>
                        <Option value=''  >Tẩt cả</Option>
                        {categories.map((ele, index) => (
                            <Option value={ele.id} key={index} >{ele.name}</Option>
                        ))}

                    </Select>
                </div>
            </div>

            <div className="filter-right">
                Sort by:&nbsp;<Dropdown overlay={menu} placement="bottomLeft">
                    <Button>{sort === '1' ? 'Descending' : 'Ascending'}</Button>
                </Dropdown>
            </div>
        </div>
    );
}

export default FilterProduct;