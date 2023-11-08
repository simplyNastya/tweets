import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTweets,
  selectIsLoading,
  selectError,
} from "../../redux/tweets/tweets-selectors";

import TweetsList from "../../components/TweetsList/TweetsList";
import { fetchTweets } from "../../redux/tweets/tweets-operations";
import styles from "./tweetsPage.module.css";

const TweetsPage = () => {
  const dispatch = useDispatch();

  const tweets = useSelector(selectTweets);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {error ? (
          <p className={styles.error}>Something went wrong. Try again later.</p>
        ) : (
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Users Profile List</h1>

            <div className={styles.spiner_box}>
              {isLoading && (
                <p className={styles.spiner}>
                  Something is loading please wait a sec.
                </p>
              )}
            </div>
            {tweets.length !== 0 && <TweetsList />}
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetsPage;
