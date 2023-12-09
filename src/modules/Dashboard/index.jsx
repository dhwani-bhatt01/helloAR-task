import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Sidebar } from "../../components/Sidebar";
import { SongsTable } from "../../components/SongsTable";
import styles from "./Dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddSongForm } from "../../components/AddSongForm";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [openAddSong, setOpenAddSong] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (token === null) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <header className={styles.mainHeader}>
          <div className={styles.breadCrumbs}>
            <span>First-level Menu / </span>
            <span>Second-level Menu / </span>
            <span className={styles.current}>Current Page</span>
          </div>

          <div className={styles.subHeader}>
            <h1>Songs</h1>
            <Button type="yellow" onClick={() => setOpenAddSong(true)}>
              Add Songs
            </Button>
          </div>
        </header>

        <SongsTable />
      </div>

      <ReactModal
        isOpen={openAddSong}
        style={{
          overlay: {},
          content: {
            width: "800px",
            height: "430px",
            margin: "auto",
          },
        }}
        contentLabel={"Example Modal"}
      >
        <div className={styles.modalHeader}>
          <span>Add Song</span>
          <FontAwesomeIcon
            icon="fa-solid fa-xmark"
            onClick={() => setOpenAddSong(false)}
          />
        </div>
        <AddSongForm />
      </ReactModal>
    </div>
  );
};
