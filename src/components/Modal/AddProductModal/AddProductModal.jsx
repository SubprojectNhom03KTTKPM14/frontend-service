import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Select, Form, Input, Button, message, Upload } from "antd";
import { useSelector, useDispatch } from "react-redux";
import productApi from "../../../api/productApi";
import { fetchProducts } from "../../../redux/slice/productSlice";
import { PlusOutlined } from "@ant-design/icons";

function AddProductModal(props) {
	const { visible, onCancel } = props;
	const { categories } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const [file, setFile] = useState(null);

	const handleOnChange = (e) => {
		const temp = e.target.files;
		if (temp) {
			setFile(temp[0]);
		}
	};

	const handleUploadImage = async (id) => {
		const formData = new FormData();
		formData.append("image", file);

		await productApi
			.updateImage(id, formData)
			.then(() => {
				message.success("Thêm thành công");
				dispatch(
					fetchProducts({
						page: 0,
						size: 5,
						sortType: "",
						categoryId: "",
					})
				);
			})
			.catch(() => message.error("Đã có lỗi xảy ra"));
	};

	const onFinish = async (values) => {
		console.log(values);
		try {
			const { id } = await productApi.addProduct(
				values.categoryId,
				values.description,
				values.name,
				values.price
			);
			if (file) {
				handleUploadImage(id);
			}
		} catch (error) {
			message.error("Đã có lỗi xảy ra");
		}

		onCancel();
	};

	const ERROR_MESSAGE = "Không hợp lệ";
	return (
		<Modal
			title="Thêm sản phẩm"
			visible={visible}
			onCancel={onCancel}
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
					label="Tên sản phẩm"
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
				<Form.Item label="Hình ảnh" name="image">
					<Input type="file" onChange={handleOnChange} />
				</Form.Item>

				<Form.Item
					label="Giá"
					name="price"
					hasFeedback
					rules={[
						{
							required: true,
							message: ERROR_MESSAGE,
						},
						{
							validator: (_, value) => {
								if (value > 0) {
									return Promise.resolve();
								}
								return Promise.reject(new Error(ERROR_MESSAGE));
							},
						},
					]}
				>
					<Input type="number" />
				</Form.Item>

				<Form.Item label="Mô tả" name="description" hasFeedback>
					<Input />
				</Form.Item>

				<Form.Item
					label="categoryId"
					name="categoryId"
					hasFeedback
					rules={[
						{
							required: true,
							message: ERROR_MESSAGE,
						},
					]}
				>
					<Select
						style={{ width: 180 }}
						// onChange={handleSelectChange}
					>
						{categories.map((ele, index) => (
							<Select.Option value={ele.id} key={index}>
								{ele.name}
							</Select.Option>
						))}
					</Select>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						span: 24,
					}}
				>
					<Button type="primary" htmlType="submit" block>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
}

AddProductModal.propTypes = {
	visible: PropTypes.bool,
	onCancel: PropTypes.func,
};

AddProductModal.defaultProps = {
	visible: false,
	onCancel: null,
};

export default AddProductModal;
