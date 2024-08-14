"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Inventory = () => {
	const { data: products, isError, isLoading } = useGetProductsQuery();

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !products) {
		return (
			<div className="text-center text-red-500 py-4">
				Failed to fetch products
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<Header name="Inventory" />
			<DataGrid
				rows={products}
				// columns={columns}
				getRowId={(row) => row.productId}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
};

export default Inventory;
