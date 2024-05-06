# scrum-project-app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## To get started:

1. Create a folder on your PC.

2. Right-click the folder and select "Open in Terminal".

3. Type `git clone https://github.com/brown-group/scrum-project-app.git` to clone the project.

4. Type `cd scrum-project-app` to navigate to the app folder.

5. Type `code .` to open VS Code.

6. Press `CTRL+Shift+ö` to open the terminal in VS Code.

7. Type `git checkout -b feature-branch-yourname main` to create a new branch. Replace `yourname` with your first name in lowercase letters. For example, `git checkout -b feature-branch-paulina main`.

8. Type `git push -u origin feature-branch-yourname` to publish your branch. Replace `yourname` with your first name in lowercase letters. For example, `git push -u origin feature-branch-paulina`.

## About the app:

- I have set up the app so that each team member has a dedicated folder.
- Each folder contains a `.jsx` file and an `.scss` file.
- Both CSS and Bootstrap can be used to style your HTML.
- Sample code has been added to demonstrate how you can use vanilla JS and React to add functionality.

## Creating and importing components to your page:

1. Create personal components folder:
  * Create a subfolder within the components folder.
  * Name this subfolder using your own name (e.g., Emil).
2. Using the personal folder.
  * Place your components (JavaScript files, React Components, etc) inside your personal folder.
  * When you need to use a component on your page, import it from your personal folder located in the Components folder.

  ### Example: 
  ```
  SCRUM-PROJECT-APP/
  ├── node_modules
  ├── public
  ├── src/
  │   ├── assets\scss
  │   ├── components/
  │   │   ├── Emil/
  │   │   │   ├── Button.jsx
  │   │   │   ├── GetColorPallet.jsx
  │   │   │   └── ...
  │   │   ├── Erik/
  │   │   │   ├── CreateContent.jsx
  │   │   │   ├── InfoWindow.jsx
  │   │   │   └── ...
  │   │   └── ...
  │   ├── routes
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  └── ...
```


### !!! Important !!!

Make sure you are in your feature branch when committing changes. We do not want to make any changes to the main branch.

