import { useSelector, useDispatch } from "react-redux";
import { selectTweets } from "../../redux/tweets/tweets-selectors";
import {
  fetchTweets,
  updateFollowers,
} from "../../redux/tweets/tweets-operations";

import Button from "../Button/Button";
import logo from "./logo.png";
import styles from "./tweetsList.module.css";

const TweetsList = () => {
  const tweets = useSelector(selectTweets);

  const dispatch = useDispatch();

  const onUpdateUser = (id) => {
    const user = tweets.find((tweet) => tweet.id === id);
    const newUser = {
      ...user,
      isActive: !user.isActive,
      followers: user.isActive ? user.followers - 1 : user.followers + 1,
    };

    dispatch(updateFollowers(newUser))
      .then(() => {
        dispatch(fetchTweets());
      })
      .catch((error) => {
        console.error("Error updating followers:", error);
      });
  };

  return (
    <ul className={styles.list}>
      {tweets.map(({ id, name, avatar, tweets, followers, isActive }) => {
        return (
          <li key={id} className={styles.item}>
            <div className={styles.userTweetContainer}>
              <img src={logo} alt="Logo" className={styles.logo} />
              <div id={id} className={styles.tweetBcgImage}>
                <div className={styles.userTweetPhotoWrapper}>
                  <img
                    src={avatar}
                    alt="User"
                    className={styles.userTweetPhoto}
                  />
                </div>
                <div className={styles.userTweetTextWrapper}>
                  <p className={styles.userTweetText}>{name}</p>
                  <p className={styles.userTweetText}> {tweets} tweets</p>
                  <p className={styles.userTweetText}>{followers} Followers</p>
                </div>
                <Button
                  onClick={() => onUpdateUser(id)}
                  className={isActive ? `active` : null}
                >
                  {isActive ? "Following" : "Follow"}
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TweetsList;
