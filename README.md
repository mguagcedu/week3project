# Week 1-5 Project: React Employee Form with Local Storage

This project implements a simple React application where you can add new employees via a form and have the entries persist in your browser’s local storage.

## Getting Started

Clone the repo and run:

\`\`\`bash
npm install
npm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Demo Screenshot

Below is how the form looks after submitting employees (data persisted via localStorage):

![Form & LocalStorage Demo](public/completion.jpg)

## Local Storage Key

This application uses the **employees** key in local storage. You can inspect it in Chrome DevTools:

1. Open DevTools (F12)  
2. Go to **Application → Local Storage → http://localhost:3000**  
3. Look for the **employees** entry (a JSON array of your saved records)

---

### Available Scripts

In the project directory, you can run:

- \`npm start\`  
- \`npm test\`  
- \`npm run build\`  
- \`npm run eject\`
