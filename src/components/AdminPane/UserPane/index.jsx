import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table, Tag, Space } from "antd";
import Column from "antd/lib/table/Column";
import { useDispatch } from "react-redux";
import { fetchUserList } from "../../../redux/slice/userSlice";
import { useSelector } from "react-redux";

UserPane.propTypes = {};

function UserPane(props) {
	const dispatch = useDispatch();
	const { userList } = useSelector((state) => state.user);
	useEffect(() => {
		dispatch(fetchUserList());
	}, []);

	return (
		<Table
			dataSource={userList}
			pagination={false}
			rowKey={(record) => record.id}
		>
			<Column title="Tên" dataIndex="name" key="name" />
			<Column title="Email" dataIndex="email" key="email" />
			<Column title="SĐT" dataIndex="phone" key="phone" />
			<Column title="Địa chỉ" dataIndex="address" key="address" />
			<Column
				title="Quyền"
				key="roleType"
				dataIndex="roleType"
				render={(_, { roleType }) => {
					return (
						<Tag color={roleType === "ADMIN" ? "magenta" : "cyan"}>
							{roleType}
						</Tag>
					);
				}}
			/>
		</Table>
	);
}

export default UserPane;
