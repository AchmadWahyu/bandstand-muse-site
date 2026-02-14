import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Signal to prerenderer that the page is ready
document.dispatchEvent(new Event("prerender-ready"));
