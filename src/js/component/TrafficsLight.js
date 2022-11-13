import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { array } from "prop-types";
//include images into your bundle

//create your first component
export const TrafficsLight = () => {
	const [selectClass, setSelectClass] = useState("red");

	return (
		<>
			<div className="palo-base"></div>
			<div className="base">
				<div
					onClick={() => {
						setSelectClass("red");
					}}
					className={`light ${
						selectClass === "red" ? "turn-Red" : "red"
					}`}></div>
				<div
					onClick={() => {
						setSelectClass("yellow");
					}}
					className={`light ${
						selectClass === "yellow" ? "turn-Yellow" : "yellow"
					}`}></div>
				<div
					onClick={() => {
						setSelectClass("green");
					}}
					className={`light ${
						selectClass === "green" ? "turn-Green" : "green"
					}`}></div>
			</div>
		</>
	);
};
