import { Button, Modal, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { currencyFormat } from "../../../utils/commonUtils";
import OrderDetailModal from "../../Modal/OrderDetailModal/OrderDetailModal";

BillPane.propTypes = {};

function BillPane(props) {
	const { orderList } = useSelector((state) => state.order);
	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const [orderSelected, setOrderSelected] = useState(null);

	const handleViewDetail = (orderId) => {
		const selected = orderList.find((ele) => ele.id === orderId);
		setOrderSelected(selected);
		setIsShowDetailModal(true);
	};
	return (
		<>
			<Table
				dataSource={orderList}
				pagination={false}
				rowKey={(record) => record.id}
				scroll={{ y: 500 }}
			>
				<Column
					title="Khách hàng"
					dataIndex="user"
					key="user"
					render={(_, { user }) => user.name}
				/>

				<Column
					title="Ngày lập hóa đơn"
					dataIndex="createdDate"
					key="createdDate"
				/>

				<Column
					title="Số lượng"
					dataIndex="orderDetails"
					key="orderDetails"
					render={(_, { orderDetails }) => orderDetails.length}
				/>

				<Column
					title="Tổng tiền"
					dataIndex="totalPrice"
					key="totalPrice"
					render={(_, { totalPrice }) => currencyFormat(totalPrice)}
				/>

				<Column
					key="action"
					align="center"
					render={(_, { id }) => {
						return (
							<Button shape="round" onClick={() => handleViewDetail(id)}>
								Chi tiết
							</Button>
						);
					}}
				/>
			</Table>

			{isShowDetailModal && (
				<OrderDetailModal
					visible={isShowDetailModal}
					onCancel={() => setIsShowDetailModal(false)}
					orderDetail={orderSelected}
				/>
			)}
		</>
	);
}

export default BillPane;
