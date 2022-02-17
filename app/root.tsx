import { EuiProvider } from "@elastic/eui";
import euiThemeDark from "@elastic/eui/dist/eui_theme_dark.css";
import type { LinksFunction, MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: euiThemeDark }];
};

export const meta: MetaFunction = () => {
  return { title: "Remix IowaJS" };
};

export const loader: LoaderFunction = async ({ context }) => {
  return { elasticApmRumAgentConfig: context.elasticApmRumAgentConfig };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <EuiProvider colorMode="dark">
          <Outlet />
        </EuiProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
