import { EuiText } from "@elastic/eui";
import { Link } from "remix";

export default function Slide3() {
  return (
    <EuiText>
      <h2>What I learned</h2>
      <ul>
        <li>I like Remix. A lot. It makes me feel like making web apps.</li>
        <li>
          Node is on the way to again no longer being the only game in
          server-side JS. Tool vendors' agent roadmaps should reflect this.
        </li>
      </ul>
      <h3>Links</h3>
      <ul>
        <li>
          The repo with these slides is on GitHub:{" "}
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/smith/remix-iowajs-slides"
          >
            https://github.com/smith/remix-iowajs-slides
          </a>
        </li>
      </ul>
    </EuiText>
  );
}
