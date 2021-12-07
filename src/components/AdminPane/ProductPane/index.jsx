import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Pagination, Row, Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slice/productSlice";
import { currencyFormat } from "../../../utils/commonUtils";
import FilterProduct from "../../FilterProduct";
import AddProductModal from "../../Modal/AddProductModal/AddProductModal";
import "./ProductPane.scss";
ProductPane.propTypes = {};

function ProductPane(props) {
	const { products, categories, currentPage, totalPages } = useSelector(
		(state) => state.product
	);

	const [isShowDetailModal, setIsShowDetailModal] = useState(false);
	const [isShowProductModal, setIsShowProductModal] = useState(false);
	const [productSelected, setProductSelected] = useState(null);

	const dispatch = useDispatch();

	const [query, setQuery] = useState({
		page: 0,
		sortType: "",
		categoryId: "",
	});

	const handlePageChange = (page) => {
		setQuery({ ...query, page: page - 1 });
	};
	useEffect(() => {
		dispatch(fetchProducts({ ...query, size: 5 }));
	}, [query]);

	const handleViewDetail = (productId) => {
		const selected = products.find((ele) => ele.id === productId);
		setProductSelected(selected);
		setIsShowDetailModal(true);
	};

	return (
		<>
			<Row justify="space-between" gutter={[8, 8]}>
				<Col xs={24} sm={24} md={24} lg={4} xl={4}>
					<Button
						type="primary"
						onClick={() => setIsShowProductModal(true)}
						icon={<PlusCircleOutlined />}
					>
						Thêm sản phẩm
					</Button>
				</Col>
			</Row>

			<FilterProduct onFilterChange={setQuery} />

			<Table
				dataSource={products}
				pagination={false}
				rowKey={(record) => record.id}
			>
				<Column title="Tên sản phẩm" dataIndex="name" key="name" />
				<Column
					title="Dòng sản phẩm"
					dataIndex="categoryId"
					key="categoryId"
					render={(_, { categoryId }) =>
						categories.find((ele) => ele.id === categoryId)?.name
					}
				/>
				<Column
					title="Giá"
					dataIndex="price"
					key="price"
					render={(_, { price }) => currencyFormat(price)}
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
			<Pagination
				onChange={handlePageChange}
				current={query.page + 1}
				total={totalPages * 8}
			/>

			{isShowDetailModal && (
				<Modal
					title="Chi tiết sản phẩm"
					visible={isShowDetailModal}
					onCancel={() => setIsShowDetailModal(false)}
					footer={null}
				>
					<div>
						<img
							className="product-image"
							alt={productSelected.name}
							src={productSelected.image}
						/>
					</div>
					<div className="product-name">{productSelected.name}</div>
					<div className="product-des">{productSelected.description}</div>
					<div className="product-price">
						{currencyFormat(productSelected.price).slice(0, -1)}
					</div>
				</Modal>
			)}

			<AddProductModal
				visible={isShowProductModal}
				onCancel={() => setIsShowProductModal(false)}
			/>
		</>
	);
}

export default ProductPane;
