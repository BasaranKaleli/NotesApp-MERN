const express = require("express");
const cors = require("cors");
const app = express();

// JSON middleware'ini doğru şekilde ekleyin
app.use(express.json());

// CORS middleware'ini ayarlayın
app.use(
  cors({
    origin: "*",
  })
);

// Basit bir GET isteği ile test endpoint'i oluşturun
app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

// Sunucuyu başlatın ve port numarasını belirleyin
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Uygulamayı dışa aktarın
module.exports = app;
