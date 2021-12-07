import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./ProductCard.scss";
import { currencyFormat } from "../../utils/commonUtils";

ProductCard.propTypes = {
	data: PropTypes.object,
	onClick: PropTypes.func,
};

ProductCard.defaultProps = {
	data: {},
	onClick: null,
};

function ProductCard({ data, onClick }) {
	const handleOnClick = () => {
		if (onClick) {
			onClick(data);
		}
	};

	return (
		<Card
			hoverable
			cover={<img alt="example" src={data.image} />}
			actions={[
				<div onClick={handleOnClick}>
					<ShoppingCartOutlined key="add_to_cart" /> Thêm vào giỏ hàng
				</div>,
			]}
			style={{ minHeight: "500px" }}
		>
			<div className="product-name">{data.name}</div>
			<div className="product-des">{data.description}</div>
			<div className="product-price">
				{currencyFormat(data.price).slice(0, -1)}
			</div>
		</Card>
	);
}

export default ProductCard;
