/**
 * Creates html markup to add to the DOM
 *
 * @param {string} avatar user profile pic
 * @param {string} username user name
 * @param {string} date date tweet was posted
 * @param {string} text tweet text
 * @param {num} likes number of likes for the tweet
 *
 * @returns {html} html markup to be inserted into dom
 */

const createHTML = (avatar, username, date, text, likes) => {
  const html = `
        <div class="creet">
          <div class="creetAvatar">
            <img class="avatar" src="${avatar}" alt="user pic" />
          </div>
          <div class="creetInfo">
            <p class="creetNameDate">
              <span class="user">@${username}</span>
              <span class="dot">&#8226</span>
              <span class="date">${date}</span>
            </p>
            <p class="creetText">${text}</p>
            <p class="likes">Likes: ${likes}</p>
          </div>
        </div>
    `;

  return html;
};

// Fetch data

const apiUrl = `https://www.acefrontend.com/c/critter/feed.json`;

fetch(apiUrl)
  // prettier ignore
  .then((response) => response.json())
  .then((data) => {
    const arr = data.feed;
    const main = document.getElementById("creets");

    // iterate through the json data and call crateHTML()
    arr.forEach((item) => {
      // deconstruct json object
      const {
        created_at,
        text,
        user: { username, avatar },
        likes,
      } = item;

      main.innerHTML += createHTML(avatar, username, created_at.substring(4, 10), text, likes);
    });
  })
  .catch((err) => console.log("Looks like there was an error:", err));
