import React, { useState } from "react";
import NodeMessage from "../NodeMessage";
import "./nodeSquare.css";
import Arrow from "../../Assets/down-arrow.svg";

const NodeSquare = ({ title, url, isActive, messages }) => {
	const [showMessages, setShowMessages] = useState(false);
	const arrowHandler = () => {
		setShowMessages(!showMessages);
	};
	return (
		<div className="node-square">
			<div className="node-square-header">
				<h2 className="node-square-title">{title}</h2>{" "}
				<span
					className={`node-square-isactive ${
						isActive ? "node-square-active" : "node-square-inactive"
					}`}
				>
					{isActive ? "ONLINE" : "OFFLINE"}
					<img
						className={`node-square-arrow ${
							showMessages && "node-square-arrow-up"
						}`}
						src={Arrow}
						alt=""
						onClick={arrowHandler}
					/>
				</span>
			</div>

			<span className="node-square-url">{url}</span>

			{showMessages
				? messages.map((item, key) => <NodeMessage key={key} {...item} />)
				: null}
		</div>
	);
};

export default NodeSquare;
