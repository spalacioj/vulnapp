const express = require("express");
const app = express();
const authRoutes = require("./routes/auth-routes");
const dbRoutes = require("./routes/db-routes");
const postRoutes = require("./routes/post-routes");
const userRoutes = require("./routes/user-routes");
const contactRoutes = require("./routes/contact-routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use('/api', authRoutes);
app.use('/api', dbRoutes);
app.use('/api', postRoutes);
app.use('/api', userRoutes);
app.use('/api', contactRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));