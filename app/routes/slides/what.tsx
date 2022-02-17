import { EuiText } from "@elastic/eui";

export default function What() {
  return (
    <EuiText>
      <h2>What is Remix?</h2>
      <p>
        From <a href="https://remix.run">https://remix.run</a>:
      </p>

      <blockquote>
        <p>
          Remix is a full stack web framework that lets you focus on the user
          interface and work back through web fundamentals to deliver a fast,
          slick, and resilient user experience.
        </p>
      </blockquote>
      <ul>
        <li>From the makers of React router</li>
        <li>Works on Node, Cloudflare Workers, and in the browser</li>
      </ul>
    </EuiText>
  );
}
