import React from "react";
import "./nodeMessage.css";

const NodeMessage = ({ id, message }) => {
	return (
		<div className="node-message">
			<p className="node-message-id">{id.toString().padStart(3, "0")}</p>
			<p className="node-message-m">{message}</p>
		</div>
	);
};

export default NodeMessage;
