const worker = new Worker(new URL("./deep-thought.js", import.meta.url));

worker.postMessage({
  question:
    "The Answer to the Ultimate Question of Life, The Universe, and Everything.",
});

worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};
