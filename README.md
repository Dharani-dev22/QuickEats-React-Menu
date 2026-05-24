# 🍕 QuickEats - React Interactive Dashboard

> **Live Demo:** [https://quickeats-react-menu.vercel.app/](https://quickeats-react-menu.vercel.app/)

QuickEats is a dynamic, multi-page frontend web application built to simulate a modern food delivery platform. It was developed to demonstrate core React architecture, robust state management, and seamless client-side routing.

## 🚀 Technical Highlights

This project intentionally avoids heavy third-party UI libraries to demonstrate a foundational understanding of core React mechanics:

* **Global State Management:** Architected a zero-prop-drilling data flow using the **Context API**. Successfully implemented concurrent contexts (`CartContext` and `UserContext`) to manage global shopping cart states and dynamic user profiles across disjointed UI components.
* **Client-Side Routing:** Implemented **React Router v6** for instant, SPA (Single Page Application) navigation. Utilized dynamic URL parameters (`useParams`) to extract and render dynamic entity data.
* **Reactive Data Handling:** Deeply utilized functional hooks (`useState`, `useEffect`) to manage controlled form inputs, array immutability, and mock external API fetching with robust error handling.
* **Optimized Build:** Configured with **Vite** for instantaneous Hot Module Replacement (HMR) and highly compressed production builds. 

## 🛠️ Tech Stack

* **Core Framework:** React 18
* **Build Tool:** Vite
* **Routing:** React Router DOM
* **Styling:** Inline JSX Styling & Vanilla CSS
* **Deployment Architecture:** Vercel

## 📁 Project Structure Notes

* **/src**: Contains the core application logic, routing, and context providers.
* **/src/archive**: Contains isolated learning components and sandbox features (API fetching logic, conditional rendering tests) used to test individual mechanics during the architecture planning phase.

## 💻 Run Locally

To run this project on your local machine:

1. Clone the repository:
    git clone https://github.com/Dharani-dev22/QuickEats-React-Menu.git

2. Navigate to the directory:
    cd QuickEats-React-Menu

3. Install dependencies:
    npm install

4. Start the development server:
    npm run dev

---

## 👨‍💻 About the Developer

I am an Information Technology undergraduate actively seeking internships in **HTML, Java, CSS, and React JS**. My engineering portfolio spans multiple platforms:

* **React JS Projects:**
  * [QuickEats React Menu](https://github.com/Dharani-dev22/QuickEats-React-Menu)
  * [React QuickEats Dashboard](https://github.com/Dharani-dev22/react-quickeats-dashboard)
* **Mobile App Development:** Developed and prepared robust Android applications for the Google Play Store using **Kotlin** and **Jetpack Compose**, including the Jay Bala Ji Super Market e-commerce platform (Firebase backend, Razorpay integration) and mobile music streaming clones integrating real-time APIs.
* **Game Development:** Built 2D and 3D physics-based games utilizing the **Unity Engine** and **C#** scripting.

**Connect with me:** [Pondharani Devendra on LinkedIn](https://www.linkedin.com/in/pondharani-devendra-a809b339b/)
