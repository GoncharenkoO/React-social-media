import HeaderBar from "../../components/HeaderBar/HeaderBar";
import SideBar from "../../components/SideBar/SideBar";
import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <HeaderBar />
      <div className={styles.homeContainer}>
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
