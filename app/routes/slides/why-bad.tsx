import { EuiText } from "@elastic/eui";

export default function WhyBad() {
  return (
    <EuiText>
      <h2>Why not Remix?</h2>
      <ul>
        <li>
          It's very new. Missing some of the polish of more battle-tested
          frameworks on the server-side. There are a few rough edges. Some
          common practices are still being established.
        </li>
        <li>
          It uses the browser APIs but sometimes those APIs are not nice to work
          with. This means you formData!
        </li>
        <li>
          The types aren't great. For example there's a type for{" "}
          <code>LoaderFunction</code> but it's not generic.
        </li>
      </ul>
    </EuiText>
  );
}
