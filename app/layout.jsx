import NavbarClient from "@components/NavbarClient";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts ",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/images/logo.svg" type="image/svg+xml" />

      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <NavbarClient />
            <div suppressHydrationWarning>{children}</div>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
