import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const handler = (req: NextRequest) => {
  const path = new URL(req.url).pathname;
  const status = getStatusCode(path);
  return new Response(
    JSON.stringify({
      cat: `https://http.cat/${status}`,
      garden: `https://http.garden/${status}.jpg`,
    }),
    {
      status,
    }
  );
};

const getStatusCode = (path: string) => {
  const code = path.split("/").pop();
  try {
    const status = Number(code);
    if (status < 100 || status > 599) {
      throw new Error("Invalid status code");
    }
    return status;
  } catch (e) {
    return 400;
  }
};

export default handler;
