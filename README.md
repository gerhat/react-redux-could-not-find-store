# react-redux issue 1166 demo

This repo was created to demonstrate the following issue: https://github.com/reduxjs/react-redux/issues/1166

## How to reproduce in *react-redux v6.0.0*

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
![Error screenshot](could-not-find-store-in-context-error.png?raw=true "Error screenshot")

## See it working correctly in *react-redux v5.1.1*

**Step 1:** Checkout branch v5.1.1:
````
  $ git checkout v5.1.1
````

**Step 2:** Link the npm package:
````
  $ cd my-private-package
  $ npm link
````

**Step 3:** Start the app that uses it:
````
  $ cd ../
  $ cd my-app
  $ npm install && npm run link && npm start
````

**Step 4:** See the app working correctly:
![Correct screenshot](my-app-correct-screen.png?raw=true "Correct screenshot")

## License
MIT