# city-quiz-frontend-react

This repository hosts the frontend of the **Capital City Quiz** application, built using React.  
The frontend allows users to play the quiz, submit answers, and interact with the backend.

---

## 🛠️ Prerequisites

- Node.js (recommended: 18.x+)
- npm or yarn (npm is recommended)

---

## 🚀 Setup Instructions

### 1. Install Dependencies

If you haven't done so already, first install the dependencies using npm (or yarn):

```bash
# Using npm
npm install

# OR using yarn
yarn install
```

---

### 2. Set Environment Variables

Create a `.env` file in the root directory and add the following:

```env
REACT_APP_HOST=http://localhost:8000  # The backend API endpoint
REACT_APP_PORTAL_URL=http://localhost:3000  # The URL for the frontend
```

> ℹ️ Make sure your React project loads environment variables from the `.env` file.

---

### 3. Start the Development Server

```bash
npm start
# OR
yarn start
```

This will run the React app in development mode at `http://localhost:3000`.

---

## 🧼 Deactivate (Optional)

You can stop the development server by pressing `Ctrl + C` in the terminal.

---