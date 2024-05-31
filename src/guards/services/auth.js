import { initializeApp } from "@firebase/app";

const Auth = {
  async init() {
    const app = initializeApp(import.meta.env.VITE_APP_FIREBASE_CONFIG);
    return app;
  }
};

export default Auth;