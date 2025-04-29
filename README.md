# My Portfolio

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Commands

Here are the scripts available in the `package.json`:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to analyze code for potential issues.

## Project Structure

The project follows a modular structure. Key directories include:

- `src/app`: Contains the main application files, including pages and layouts.
- `src/ui/components`: Reusable UI components such as `Navigation`, `Footer`, and `Timeline`.
- `src/app/api`: API routes for server-side functionality.
- `public`: Static assets like images and icons.

## Configuration

- **ESLint**: Configured in `eslint.config.mjs` for linting.
- **TypeScript**: Configured in `tsconfig.json`.
- **PostCSS**: Configured in `postcss.config.mjs` for styling.

## Deployment

To deploy the application, use the [Vercel Platform](https://vercel.com/). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed steps.

## Additional Notes

- **Global Styles**: Defined in `src/app/globals.css`.
- **API Endpoints**: Example API routes are available under `src/app/api`.
- **Utilities**: Helper functions are located in `src/app/lib/utils.ts`.
