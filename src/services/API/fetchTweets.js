import axios from "axios";

const tweetInstance = axios.create({
  baseURL: 'https://6478b781362560649a2e5509.mockapi.io/api/v1/users',
});

export const getAllTweets = () => tweetInstance('');

export const updateUserFollowers = (value) => {
  return tweetInstance.put(`/${value.id}`, value)
};

