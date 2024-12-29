"use client";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { fontSans } from "@/config/fonts";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";
import { JSX } from "react";
import store from "@/store";
import { Provider } from "react-redux";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Provider store={store}>
          <ThemeProvider defaultTheme="system" attribute={"class"}>
            <div className="flex h-screen">
              <Drawer />
              <div className="flex flex-col flex-1">
                <Header />
                <Breadcrumb />
                <main className="flex-1 py-4 px-10 overflow-y-auto">
                  {children}
                </main>
              </div>
            </div>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
