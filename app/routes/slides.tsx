import { EuiPageTemplate, EuiSideNav } from "@elastic/eui";
import { Link, Outlet } from "remix";

export default function Slides() {
  return (
    <EuiPageTemplate
      pageHeader={{ pageTitle: "Remix 💖 Iowa JS" }}
      pageSideBar={
        <EuiSideNav
          heading="Navigation"
          headingProps={{ screenReaderOnly: true }}
          items={[
            {
              id: "index",
              name: "Welcome",
              renderItem: () => <Link to="/slides/">Welcome</Link>,
            },
            {
              id: "2",
              name: "What is Remix?",
              renderItem: () => <Link to="/slides/what">What is Remix?</Link>,
            },
            {
              id: "3",
              name: "Why Remix?",
              renderItem: () => <Link to="/slides/why">Why Remix?</Link>,
            },
            {
              id: "why-bad",
              name: "Why not Remix?",
              renderItem: () => (
                <Link to="/slides/why-bad">Why not Remix?</Link>
              ),
            },
            {
              id: "vote",
              name: "Vote",
              renderItem: () => <Link to="/slides/vote">Vote</Link>,
            },
            {
              id: "apmnav",
              name: "Observability",
              items: [
                {
                  id: "index",
                  name: "Elastic",
                  renderItem: () => (
                    <Link to="/slides/observability">Elastic</Link>
                  ),
                },
                {
                  id: "2",
                  name: "Metronome",
                  renderItem: () => (
                    <Link to="/slides/observability/metronome">Metronome</Link>
                  ),
                },
                {
                  id: "3",
                  name: "OpenTelemetry",
                  renderItem: () => (
                    <Link to="/slides/observability/otel">OpenTelemetry</Link>
                  ),
                },
              ],
            },
            {
              id: "5",
              name: "What I learned",
              renderItem: () => (
                <Link to="/slides/learned">What I learned</Link>
              ),
            },
          ]}
        ></EuiSideNav>
      }
    >
      <Outlet />
    </EuiPageTemplate>
  );
}
