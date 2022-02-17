import { EuiSpacer, EuiTitle } from "@elastic/eui";
import { Outlet } from "remix";

export default function ObservabilityLayout() {
  return (
    <>
      <EuiTitle size="m">
        <h2>Observability</h2>
      </EuiTitle>
      <EuiSpacer size="l" />
      <Outlet />
    </>
  );
}
