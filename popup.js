const getTweetButton = document.querySelector("#get-tweet");

//routine fetching tweet
function generateTweet() {
  const tweetArea = document.querySelector(".tweet-area");
  const loadingScreen = document.querySelector(".loading-screen");

  loadingScreen.style.display = "flex";
  tweetArea.style.display = "none";

  return new Promise((resolve) => {
    setTimeout(() => {
      const finalTweet = "test";
      //todo: instructions to get final tweet
      loadingScreen.style.display = "none";
      tweetArea.style.display = "flex";

      // .then value
      resolve(finalTweet);
    }, 1000);
  });
}

function showTweet(tweet) {
  const tweetArea = document.querySelector(".tweet-area");
  tweetArea.value = tweet;
}

function renderTweetOnPage() {
  //todo: take the twitter input and enter the tweet
}

getTweetButton.addEventListener("click", async (e) => {
  const finalTweet = await generateTweet();
  console.log(finalTweet);
  showTweet(finalTweet);
});
