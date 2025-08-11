/**
 * npx create-react-app lecture3 --template typescript
 * npm i react@18.3.1 react-dom@18.3.1
 * npm i styled-components@5.3.10 react-router-dom@5.3.4 @tanstack/react-query react-helmet
 * npm i --save-dev @types/styled-components @types/react-router-dom @tanstack/react-query-devtools @types/react-helmet
 * npm i --save react-apexcharts apexcharts
 * npm i recoil
 * npm i react-hook-form
 * npm i recoil-persist
 */

import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <RecoilRoot>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </RecoilRoot>,
);
