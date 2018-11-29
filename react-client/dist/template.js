export default ({body, styles, initialState}) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>Product Info</title>
        ${styles}
        </head>
        <body>
        <div id="Info">${body}</div>
        <script type="text/javascript" src="/info.bundle.js"></script>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        </body>
        </html>`
}