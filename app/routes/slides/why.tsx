import { EuiText } from "@elastic/eui";

export default function Why() {
  return (
    <EuiText>
      <h2>Why Remix?</h2>
      <ul>
        <li>Progressive enhancement</li>
        <li>Web standard APIs</li>
        <li>Encourages use of forms for mutation</li>
        <li>
          Good conventions make building web apps <em>fun</em> and{" "}
          <em>simple</em>
        </li>
        <li>Fast server rendering; no loading spinners</li>
        <li>It's all just React and TypeScript</li>
      </ul>
    </EuiText>
  );
}
