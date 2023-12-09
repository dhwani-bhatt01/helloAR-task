import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AddSongForm.module.css";
import { Button } from "../Button";

export const AddSongForm = () => {
  return (
    <div className={styles.songDetails}>
      <label>Song Name</label>
      <input type="text" placeholder="Song Name" />

      <label>Song Link</label>
      <input type="text" placeholder="URL" />

      <label>Song Name</label>
      <input type="text" placeholder="Song Source" />

      <button className={styles.uploadBtn}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
        Click to Upload Profile Thumbnail
      </button>

      <div className={styles.helpText}>
        Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000
        pixels
      </div>

      <div className={styles.footer}>
        <Button>Cancel</Button>
        <Button>Add</Button>
      </div>
    </div>
  );
};
