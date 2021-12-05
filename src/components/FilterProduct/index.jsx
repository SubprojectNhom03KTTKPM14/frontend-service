import React from 'react';
import PropTypes from 'prop-types';
import './FilterProduct.scss';
import { Button, Dropdown, Input, Menu, Select } from 'antd';
FilterProduct.propTypes = {

};

function FilterProduct(props) {

    const handleSelectChange = () => {

    }
    const { Option } = Select;

    const menu = (
        <Menu>
            <Menu.Item>
                Gía tăng dần
            </Menu.Item>
            <Menu.Item>
                Gía giảm dần
            </Menu.Item>
        </Menu>

    )
    return (

        <div id='filter-product'>
            <div className="filter-left">
                <div className="filter-name">
                    <label htmlFor="">Tên sản phẩm</label>
                    <Input placeholder="Tên sản phẩm" />
                </div>

                <div className="filter-select">
                    Loại: &nbsp;
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleSelectChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
            </div>

            <div className="filter-right">
                Sắp xếp theo:&nbsp;<Dropdown overlay={menu} placement="bottomLeft">
                    <Button>Gía tăng dần</Button>
                </Dropdown>
            </div>
        </div>
    );
}

export default FilterProduct;