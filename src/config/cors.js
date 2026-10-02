const allowedOrigins = [
  process.env.CORS_ORIGIN,
  "http://localhost:5173",
  "https://your-production-app.com",
].filter(Boolean); // <--- CRITICAL: This removes undefined/null values

export const allowedCorsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};
