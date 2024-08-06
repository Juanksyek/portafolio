// app.worker.ts
addEventListener('message', ({ data }) => {
    const response = `Worker response to ${data}`;
    postMessage(response);
  });
  