
import { env } from "@/env/server";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{env.NODE_ENV}</p>
    </div>
  );
}
