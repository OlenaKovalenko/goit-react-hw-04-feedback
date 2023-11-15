import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    section {
        width: 600px;
        margin-right: auto;
        margin-left: auto;
        border-radius: ${p => p.theme.radii.lg};
        margin-top: ${p => p.theme.spacing(10)};
        margin-bottom: ${p => p.theme.spacing(10)};
        padding-top: ${p => p.theme.spacing(8)};
        padding-bottom: ${p => p.theme.spacing(8)};
        background-color: ${p => p.theme.colors.lightGrey};
        box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
        text-align: center;
    }
`;