import { Modal, Table } from "antd";
import Column from "antd/lib/table/Column";
import PropTypes from "prop-types";
import React from "react";
import { currencyFormat } from "../../../utils/commonUtils";

const OrderDetailModal = (props) => {
	const { visible, onCancel, orderDetail } = props;
	return (
		<Modal
			title="Chi tiết hóa đơn"
			visible={visible}
			onCancel={onCancel}
			footer={null}
		>
			<div className="product-name">{orderDetail.user.name}</div>
			<div className="product-des">Email: {orderDetail.user.email}</div>
			<div className="product-des">Số điện thoại: {orderDetail.user.phone}</div>
			<div className="product-des">Địa chỉ: {orderDetail.user.address}</div>
			<div className="product-des">
				Ngày lập hóa đơn: {orderDetail.createdDate}
			</div>

			<Table
				dataSource={orderDetail.orderDetails}
				pagination={false}
				rowKey={(record) => record.id}
			>
				<Column
					title="Sản phẩm"
					dataIndex="product"
					key="product"
					render={(_, { product }) => product.name}
				/>
				<Column
					title="Số lượng"
					dataIndex="quantity"
					key="quantity"
					align="center"
					render={(_, { quantity }) => quantity}
				/>

				<Column
					title="Tổng"
					dataIndex="totalPrice"
					key="totalPrice"
					render={(_, { totalPrice }) => currencyFormat(totalPrice)}
				/>
			</Table>

			<div className="product-price">
				Tổng tiền:{" "}
				{orderDetail.totalPrice &&
					currencyFormat(orderDetail.totalPrice).slice(0, -1)}
			</div>
		</Modal>
	);
};

OrderDetailModal.propTypes = {
	visible: PropTypes.bool,
	onCancel: PropTypes.func,
	orderDetail: PropTypes.object,
};

OrderDetailModal.defaultProps = {
	visible: false,
	onCancel: null,
	orderDetail: null,
};
export default OrderDetailModal;
