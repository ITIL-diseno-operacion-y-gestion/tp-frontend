import { env as envClient } from "@/env/client";
import { env } from "@/env/server";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{env.NODE_ENV}</p>
      <p>{envClient.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
