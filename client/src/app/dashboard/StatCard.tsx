import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetail = {
	title: string;
	amount: string;
	changePercentage: number;
	IconComponent: LucideIcon;
};

type StatCardProps = {
	title: string;
	primaryIcon: JSX.Element;
	details: StatDetail[];
	dateRange: string;
};

const StatCard = ({
	title,
	primaryIcon,
	details,
	dateRange
}: StatCardProps) => {
	const formatPercentage = (value: number) => {
		const signal = value >= 0 ? "+" : "";
		return `${signal}${value.toFixed()}%`;
	};

	const getChangeColor = (value: number) =>
		value >= 0 ? "text-green-500" : "text-red-500";

	return (
		<div className="md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col justify-between">
			{/* the header */}
			<div>
				<div className="flex justify-between items-center mb-2 px-5 pt-4">
					<h2 className="font-semibold text-lg text-gray-700">{title}</h2>
					<span className="text-xs text-gray-400">{dateRange}</span>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default StatCard;
