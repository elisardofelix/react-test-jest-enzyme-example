# HOW TO INSTALL JEST ON VITE-REACT PROJECT

First, install all the package required for jest and babel both with enzyme that is optional are requiere please see use the command below:
`yarn add --dev @babel/core @babel/preset-env @babel/preset-react @testing-library/jest-dom @testing-library/react @testing-library/user-event @vitejs/plugin-react @wojtekmaj/enzyme-adapter-react-17 babel-jest enzyme identity-obj-proxy jest react-test-renderer`

After that you need to set the files following file as we describe in the structure (Please use the files in the project as example):

```
.
├── jest.config.js
├── babel.config.js
├── Tests
│   ├── setup.js
│   └── __mocks__
|       └── fileMock.js
```
