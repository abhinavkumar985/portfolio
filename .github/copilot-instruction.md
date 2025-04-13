# Copilot Instructions for My Portfolio Project

This document provides guidelines and best practices for working on the **My Portfolio** project, which is built using **Next.js**, **Node.js**, and **Tailwind CSS**.

---

## Getting Started

To start the development server, use one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

You can begin editing the project by modifying the `app/page.tsx` file. The page will auto-update as you make changes.

---

## Project Structure

The project follows a modular structure for scalability and maintainability:

```
/src
  /components    // Reusable React components
  /pages         // Next.js pages
  /layouts       // Layout components
  /styles        // Tailwind CSS and global styles
  /utils         // Utility functions
  /hooks         // Custom React hooks
  /services      // API calls or backend services
  /middleware    // Middleware for Node.js
```

---

## Best Practices

### **1. Code Quality**
- Use **TypeScript** for type safety.
- Follow a consistent coding style with **Prettier** and **ESLint**.
- Use **Husky** and **lint-staged** to enforce pre-commit hooks for linting and formatting.
- Write modular, reusable, and small components.

### **2. Tailwind CSS**
- Use utility-first principles for styling.
- Extract reusable styles into Tailwind's `@apply` directive or `theme` configuration.
- Use responsive and state-based variants effectively.

### **3. Next.js**
- Use `getStaticProps` and `getServerSideProps` for data fetching.
- Optimize images with `next/image`.
- Leverage `next/head` for SEO and metadata.

### **4. State Management**
- Use **React Context** or **Zustand** for lightweight state management.
- For server-state management, consider **React Query**.

### **5. Testing**
- Write unit tests with **Jest** and **React Testing Library**.
- Use **Cypress** for end-to-end testing.

---

## Deployment

The easiest way to deploy this Next.js app is via [Vercel](https://vercel.com). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest)

---

By following these instructions and best practices, you can ensure the project remains scalable, maintainable, and performant.