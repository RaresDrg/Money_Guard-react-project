import styles from './LoadingScreen.module.css';
import loadingScreenImg from '../../../images/loading_screen/loadingScreenImg.png';
import 'animate.css';

const LoadingScreen = ({ text }) => {
  const textAnimationClases =
    'animate__animated animate__flash animate__infinite animate__slow';

  return (
    <>
      <div className={styles.bgImg}>
        <div className={styles.blur}></div>
      </div>

      {text && (
        <h1 className={`${styles.contentText} ${textAnimationClases}`}>
          {text}
        </h1>
      )}

      <div className={styles.contentImg}>
        <img
          src={loadingScreenImg}
          alt="logo"
          className="animate__animated  animate__flip animate__infinite animate__slow"
        />
      </div>
    </>
  );
};

export default LoadingScreen;
