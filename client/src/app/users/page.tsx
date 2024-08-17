"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "userId", headerName: "ID", width: 90 },
	{ field: "name", headerName: "Name", width: 200 },
	{ field: "email", headerName: "Email", width: 200 }
];

const Users = () => {
	const { data: users, isError, isLoading } = useGetUsersQuery();

	return (
		<div className="flex flex-col">
			<Header name="Users" />
			<DataGrid
				rows={users}
				columns={columns}
				getRowId={(row) => row.userId}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
};

export default Users;
