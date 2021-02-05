# Chrome Tab Manager
## Create Project
1. create react app and @types/chrome install
    ```
    $ npx create-react-app chrome-tab-manager --template typescript
    $ yarn add @types/chrome -D
    ```
   
2. Set up the manifest
   
   Edit `public/manifest.json`
    ```example
    {
        "name": "My Extension",
        "version": "1.0.0",
        "manifest_version": 3,
        "action": {
            "default_popup": "index.html"
        }
    }
    ```

3. Set up the production build step
   
    `"build": "react-scripts build"`<br/>
   to<br/>
   `"build": "INLINE_RUNTIME_CHUNK=false react-scripts build"`

## Serve
1. `chrome://extensions/`からアプリを追加する
2. `yarn build`
