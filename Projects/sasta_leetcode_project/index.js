document.addEventListener("DOMContentLoaded", function () {

    
    const searchButton = document.getElementById("search-button");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
  
    function validityUsername(username) {
      if (username.trim() === "") {
        alert("Username cannot be null");
        return false;
      }
      const regex = /^[a-zA-Z0-9_]{3,16}$/;
      if (!regex.test(username)) {
        alert("Invalid Username!");
        return false;
      }
      return true;
    }
  
    async function fetchUserDetails(username) {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = "https://leetcode.com/graphql/";
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const graphql = JSON.stringify({
        query: `
          query userSessionProgress($username: String!) {
            allQuestionsCount {
              difficulty
              count
            }
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                  submissions
                }
                totalSubmissionNum {
                  difficulty
                  count
                  submissions
                }
              }
            }
          }
        `,
        variables: { username: username },
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow",
      };
  
      try {
        searchButton.textContent = "Searching...";
        searchButton.disabled = true;
  
        const response = await fetch(proxyUrl + targetUrl, requestOptions);
  
        if (!response.ok) {
          console.error(`HTTP Error: ${response.status} ${response.statusText}`);
          statsContainer.innerHTML = `<p>Failed to fetch data. Please try again.</p>`;
          return;
        }
  
        const parseddata = await response.json();
  
        if (!parseddata || parseddata.errors) {
          console.error("API Error:", parseddata.errors);
          statsContainer.innerHTML = `<p>No data found or API error occurred.</p>`;
          return;
        }
  
        displayUserData(parseddata);
      } catch (error) {
        console.error("Fetch Error:", error);
        statsContainer.innerHTML = `<p>An error occurred while fetching data.</p>`;
      } finally {
        searchButton.textContent = "Search";
        searchButton.disabled = false;
      }
    }
  
    function updateProgress(solved, total, label, circle) {
      const percentage = (solved / total) * 100;
      circle.style.strokeDashoffset = `calc(440 - (440 * ${percentage}) / 100)`;
      label.textContent = `${solved} / ${total}`;
    }
  
    function displayUserData(parseddata) {
      const allQuestionsCount = parseddata.data.allQuestionsCount;
      const submitStats = parseddata.data.matchedUser.submitStats;
  
      const totalQues = allQuestionsCount.find((q) => q.difficulty === "All").count;
      const totalEasyQues = allQuestionsCount.find((q) => q.difficulty === "Easy").count;
      const totalMediumQues = allQuestionsCount.find((q) => q.difficulty === "Medium").count;
      const totalHardQues = allQuestionsCount.find((q) => q.difficulty === "Hard").count;
  
      const totalSolved = submitStats.acSubmissionNum.find((q) => q.difficulty === "All").count;
      const totalSolvedEasy = submitStats.acSubmissionNum.find((q) => q.difficulty === "Easy").count;
      const totalSolvedMedium = submitStats.acSubmissionNum.find((q) => q.difficulty === "Medium").count;
      const totalSolvedHard = submitStats.acSubmissionNum.find((q) => q.difficulty === "Hard").count;
  
      updateProgress(totalSolvedEasy, totalEasyQues, document.getElementById("easy-label"), document.getElementById("easy-progress"));
      updateProgress(totalSolvedMedium, totalMediumQues, document.getElementById("medium-label"), document.getElementById("medium-progress"));
      updateProgress(totalSolvedHard, totalHardQues, document.getElementById("hard-label"), document.getElementById("hard-progress"));
      updateProgress(totalSolved, totalQues, document.getElementById("total-label"), document.getElementById("total-progress"));
    }
  
    searchButton.addEventListener("click", function () {
      const username = usernameInput.value;
      if (validityUsername(username)) {
        fetchUserDetails(username);
      }
    });
  });
   