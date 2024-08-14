"use client";

import { useCreateProductMutation, useGetProductsQuery } from "@/state/api";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Header from "@/app/(components)/Header";
import Rating from "@/app/(components)/Rating";
import CreateProductModal from "./CreateProductModal";
import Image from "next/image";

type ProductFormData = {
	name: string;
	price: number;
	stockQuantity: number;
	rating: number;
};

const Products = () => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="mx-auto pb-5 w-full">
			{/* SEARCH BAR */}
			<div className="mb-6">
				<div className="flex items-center border-2 border-gray-200 rounded">
					<SearchIcon className="w-5 h-5 text-gray-500 m-2" />
					<input
						className="w-full py-2 px-4 rounded bg-white"
						placeholder="Search products..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Products;
