import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import denoLogo from "./assets/deno.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = createSignal("Friend");

  return (
    <>
      <div>
        <a href="https://solidjs.com" target="_blank">
          <img src={denoLogo} class="logo solid" alt="Deno logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
      </div>

      <h1 class="greeting">
        Hello, <span>{name()}</span>!
      </h1>
      <span>I'm using Deno, Solid and Vite</span>
      <div class="card">
        <span>
          Set your name:
          <input
            type="text"
            onInput={(e) => setName(e.currentTarget.value)}
            value={name()}
          />
        </span>
      </div>
    </>
  );
}

export default App;
