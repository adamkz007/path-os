import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

function deepSeekProxyPlugin(apiKey) {
  const registerProxy = (server) => {
    server.middlewares.use("/api/deepseek/v1/messages", async (req, res) => {
      if (req.method !== "POST") {
        res.statusCode = 405;
        res.end("Method Not Allowed");
        return;
      }

      if (!apiKey) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: { message: "Missing DEEPSEEK_API_KEY." } }));
        return;
      }

      try {
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const upstream = await fetch("https://api.deepseek.com/anthropic/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
          body: Buffer.concat(chunks),
          duplex: "half",
        });

        res.statusCode = upstream.status;
        upstream.headers.forEach((value, key) => {
          if (key.toLowerCase() === "content-encoding") return;
          res.setHeader(key, value);
        });

        if (!upstream.body) {
          res.end();
          return;
        }

        for await (const chunk of upstream.body) res.write(chunk);
        res.end();
      } catch (error) {
        res.statusCode = 502;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: { message: error instanceof Error ? error.message : "DeepSeek proxy failed." } }));
      }
    });
  };

  return {
    name: "deepseek-anthropic-proxy",
    configureServer: registerProxy,
    configurePreviewServer: registerProxy,
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), deepSeekProxyPlugin(env.DEEPSEEK_API_KEY)],
  };
});
