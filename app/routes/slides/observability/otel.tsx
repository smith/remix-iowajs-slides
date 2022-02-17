import { EuiText } from "@elastic/eui";

export default function OpenTelemetry() {
  return (
    <EuiText>
      <h2>OpenTelemetry</h2>
      <ul>
        <li>
          <a href="https://opentelemetry.io/docs/instrumentation/js/">
            opentelemetry-js
          </a>
        </li>
        <li>
          Probably works on Node and Browser environments, but manual setup
          required
        </li>
      </ul>
    </EuiText>
  );
}
