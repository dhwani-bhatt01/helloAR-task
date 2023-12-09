import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
	const navigate = useNavigate();

	const handleLogoutClick = () => {
		sessionStorage.removeItem("token");
		navigate("/sign-in");
	};

	return (
		<div className={styles.sidebarContainer}>
			<div className={styles.logo}>Logo</div>
			<div className={styles.menuItem}>
				<FontAwesomeIcon icon="fa-solid fa-music" />
				<span>Songs</span>
			</div>

			<div className={styles.logoutBtn} onClick={handleLogoutClick}>
				<FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
				Logout
			</div>
		</div>
	);
};
