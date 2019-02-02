# react-redux issue 1166 demo

This repo was created to demonstrate the following issue: https://github.com/reduxjs/react-redux/issues/1166

## How to reproduce

**Step 1:** Link the npm package:
````
  $ cd my-private-package
  $ npm link
````

**Step 2:** Start the app that uses it:
````
  $ cd ../
  $ cd my-app
  $ npm install && npm run link && npm start
````

**Step 3:** See the app crash with the following error:
````
Could not find "store" in the context of "Connect(Header)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Header) in connect options.
````

## License
MIT