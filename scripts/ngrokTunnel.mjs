import "dotenv/config";
import ngrok from "@ngrok/ngrok";

const port = Number(process.env.PORT || 5173);
const token = process.env.NGROK_AUTHTOKEN?.trim();

if (!token) {
  console.error("❌  Missing NGROK_AUTHTOKEN in .env");
  process.exit(1);
}

console.log("⏳  Connecting to ngrok...");

const connectWithTimeout = Promise.race([
  ngrok.forward({ addr: port, authtoken_from_env: true }),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Connection timed out after 15s — check if your authtoken is valid at https://dashboard.ngrok.com")), 15000)
  ),
]);

let listener;
try {
  listener = await connectWithTimeout;
} catch (err) {
  console.error("❌  ngrok error:", err.message);
  process.exit(1);
}

const url = listener.url();
console.log("\n✅  ngrok tunnel is live!\n");
console.log("   🌐  Public URL:", url);
console.log("\n   Share this link to preview on any device.\n");

const handleShutdown = async () => {
  console.log("\n🔌  Closing ngrok tunnel...");
  try { await listener.close(); } catch { /* no-op */ }
  process.exit(0);
};

process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);
process.stdin.resume();
