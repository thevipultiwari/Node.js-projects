import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Computer Joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Developer Joke",
      content: "Why do Java developers wear glasses? Because they don’t C#.",
    },
    {
      id: 3,
      title: "Bug Joke",
      content: "I tried to debug my code… but it still won’t stop crying.",
    },
    {
      id: 4,
      title: "API Joke",
      content:
        "Why did the API break up with the server? It felt like there was no response.",
    },
    {
      id: 5,
      title: "Algorithm Joke",
      content:
        "I told my computer I needed a break… now it won't stop giving me recursion errors.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
