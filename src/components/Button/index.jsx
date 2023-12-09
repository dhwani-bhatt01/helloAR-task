import styles from "./Button.module.css";

export const Button = ({
	children,
	size = "default",
	type = "purple",
	loading = false,
	onClick = () => {},
}) => {
	const buttonStyles = {
		width: size === "full" ? "100%" : "auto",
		borderRadius: type === "purple" ? "12px" : "8px",
		backgroundColor: type === "purple" ? "#552583" : "#FDB927",
		color: type === "purple" ? "#FFFFFF" : "#000000",
		cursor: loading ? "not-allowed" : "pointer",
	};

	return (
		<button
			style={buttonStyles}
			className={styles.btn}
			disabled={loading}
			onClick={onClick}
		>
			{loading ? "Loading..." : children}
		</button>
	);
};
