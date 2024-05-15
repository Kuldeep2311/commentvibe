const commentInput = document.getElementById('commentInput');
const analyzeButton = document.getElementById('analyzeButton');
const resultDiv = document.getElementById('result');

function analyzeSentiment(comment) {
  // Replace this with your actual sentiment analysis logic
  // Here's a basic example using simple keywords:
  let sentiment = "neutral";
  if (comment.includes("great") || comment.includes("love") || comment.includes("happy")) {
    sentiment = "positive";
  } else if (comment.includes("bad") || comment.includes("hate") || comment.includes("sad")) {
    sentiment = "negative";
  }
  return sentiment;
}

analyzeButton.addEventListener('click', () => {
  const comment = commentInput.value;
  const sentiment = analyzeSentiment(comment);
  resultDiv.textContent = `Your comment seems ${sentiment}`;
  resultDiv.classList.add(sentiment);
});
