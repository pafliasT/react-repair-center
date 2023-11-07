import Home from "./components/Home";
import "./App.css";
import { Suspense } from "react";

function App() {
  return <Home />;
}

export default function WrappedApp() {
  return (
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  );
}
