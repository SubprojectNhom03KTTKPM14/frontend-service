import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Row, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../../api/productApi";
import { fetchCategories } from "../../../redux/slice/productSlice";

CategoryPane.propTypes = {};

function CategoryPane(props) {
	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.product);
	const [modalVisible, setModalVisible] = useState(false);

	const ERROR_MESSAGE = "Không hợp lệ";

	const onFinish = async (values) => {
		console.log(values);
		try {
			await productApi.addCategory(values.description, values.name);
			dispatch(fetchCategories());
			message.success("Thêm thành công");
		} catch (error) {
			message.error("Đã có lỗi xảy ra");
		}
	};

	return (
		<div>
			<Row>
				<Button
					type="primary"
					onClick={() => setModalVisible(true)}
					icon={<PlusCircleOutlined />}
				>
					Thêm dòng sản phẩm
				</Button>
			</Row>

			<Table
				dataSource={categories}
				pagination={false}
				rowKey={(record) => record.id}
				scroll={{ y: 500 }}
			>
				<Column title="Dòng sản phẩm" dataIndex="name" key="name" />
				<Column title="Mô tả" dataIndex="description" key="description" />
			</Table>

			{modalVisible && (
				<Modal
					title="Thêm dòng sản phẩm"
					visible={modalVisible}
					onCancel={() => setModalVisible(false)}
					footer={null}
				>
					<Form
						name="basic"
						labelCol={{
							span: 8,
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						autoComplete="off"
					>
						<Form.Item
							label="Tên dòng"
							name="name"
							rules={[
								{
									required: true,
									message: ERROR_MESSAGE,
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item label="Mô tả" name="description" hasFeedback>
							<Input />
						</Form.Item>

						<Form.Item
							wrapperCol={{
								span: 24,
							}}
						>
							<Button type="primary" htmlType="submit" block>
								Thêm
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			)}
		</div>
	);
}

export default CategoryPane;
