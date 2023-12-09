import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SongsTable.module.css";

export const SongsTable = () => {
	return (
		<div className={styles.songTable}>
			<table>
				<thead>
					<tr>
						<th>Song Name</th>
						<th>Source</th>
						<th>Added On</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<div className={styles.songInfo}>
							<img
								src="https://i.pinimg.com/564x/8a/d0/a2/8ad0a23bdcf31fda556dff0f9724cbb5.jpg"
								alt="song-image"
								className="song-image"
							/>
							<span>Song 1</span>
						</div>

						<td>YouTube</td>
						<td>2023-12-06</td>
						<td className={styles.actionBtns}>
							<FontAwesomeIcon
								className={styles.playBtn}
								icon="fa-solid fa-circle-play"
								style={{ color: "#fdb927" }}
							/>
							<FontAwesomeIcon
								className={styles.removeBtn}
								icon="fa-solid fa-trash"
							/>
						</td>
					</tr>
					<tr>
						<div className={styles.songInfo}>
							<img
								src="https://i.pinimg.com/564x/8a/d0/a2/8ad0a23bdcf31fda556dff0f9724cbb5.jpg"
								alt="song-image"
								className={styles.songImage}
							/>
							<span>Song 1</span>
						</div>

						<td>YouTube</td>
						<td>2023-12-06</td>
						<td className={styles.actionBtns}>
							<FontAwesomeIcon
								className={styles.playBtn}
								icon="fa-solid fa-circle-play"
								style={{ color: "#fdb927" }}
							/>
							<FontAwesomeIcon
								className={styles.removeBtn}
								icon="fa-solid fa-trash"
							/>
						</td>
					</tr>
					<tr>
						<div className={styles.songInfo}>
							<img
								src="https://i.pinimg.com/564x/8a/d0/a2/8ad0a23bdcf31fda556dff0f9724cbb5.jpg"
								alt="song-image"
								className={styles.songImage}
							/>
							<span>Song 1</span>
						</div>

						<td>YouTube</td>
						<td>2023-12-06</td>
						<td className="action-btns">
							<FontAwesomeIcon
								className="play-btn"
								icon="fa-solid fa-circle-play"
								style={{ color: "#fdb927" }}
							/>
							<FontAwesomeIcon
								className="remove-btn"
								icon="fa-solid fa-trash"
							/>
						</td>
					</tr>
					<tr>
						<div className={styles.songInfo}>
							<img
								src="https://i.pinimg.com/564x/8a/d0/a2/8ad0a23bdcf31fda556dff0f9724cbb5.jpg"
								alt="song-image"
								className="song-image"
							/>
							<span>Song 1</span>
						</div>

						<td>YouTube</td>
						<td>2023-12-06</td>
						<td className={styles.actionBtns}>
							<FontAwesomeIcon
								className={styles.playBtn}
								icon="fa-solid fa-circle-play"
								style={{ color: "#fdb927" }}
							/>
							<FontAwesomeIcon
								className={styles.removeBtn}
								icon="fa-solid fa-trash"
							/>
						</td>
					</tr>
					<tr>
						<div className={styles.songInfo}>
							<img
								src="https://i.pinimg.com/564x/8a/d0/a2/8ad0a23bdcf31fda556dff0f9724cbb5.jpg"
								alt="song-image"
								className="song-image"
							/>
							<span>Song 1</span>
						</div>

						<td>YouTube</td>
						<td>2023-12-06</td>
						<td className={styles.actionBtns}>
							<FontAwesomeIcon
								className={styles.playBtn}
								icon="fa-solid fa-circle-play"
								style={{ color: "#fdb927" }}
							/>
							<FontAwesomeIcon
								className={styles.removeBtn}
								icon="fa-solid fa-trash"
							/>
						</td>
					</tr>
					<tr>
						<div className={styles.songInfo}>
							<img
								src="https://i.pinimg.com/564x/8a/d0/a2/8ad0a23bdcf31fda556dff0f9724cbb5.jpg"
								alt="song-image"
								className="song-image"
							/>
							<span>Song 1</span>
						</div>

						<td>YouTube</td>
						<td>2023-12-06</td>
						<td className={styles.actionBtns}>
							<FontAwesomeIcon
								className={styles.playBtn}
								icon="fa-solid fa-circle-play"
								style={{ color: "#fdb927" }}
							/>
							<FontAwesomeIcon
								className={styles.removeBtn}
								icon="fa-solid fa-trash"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
