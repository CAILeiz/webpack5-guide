self.onmessage = ({ data: { question } }) => {
  console.log("question", question);
  self.postMessage({
    answer: 42,
  });
};
