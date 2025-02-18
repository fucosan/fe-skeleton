# Web Admin Frontend Environment Setup

# Web Admin Frontend Environment Setup

This document outlines the required setup for running the Web Admin application in different environments.

## 1. Prerequisites

**Software:**

*   Node.js (LTS version recommended, current LTS: v22.13.1)
*   npm

**Optional:** (List optional software here if any)

## 2. Environment Variables

The application utilizes environment variables for configuration. These are loaded based on the following priority (highest to lowest), as detailed in the [Vite documentation](https://vite.dev/guide/env-and-mode):

1.  `.env.[mode].local`: Local overrides for a specific mode (e.g., `.env.development.local`). These files are *not* committed to version control.
2.  `.env.[mode]`: Environment-specific settings (e.g., `.env.development`, `.env.production`, `.env.staging`).
3.  `.env.local`: Local overrides for all modes.  These files are also typically *not* committed. (Not currently used)
4.  `.env`: Default environment variables. (Not currently used)

**Security Notice:**  Do *not* commit environment files containing sensitive information (API keys, secrets) to version control. Employ secure methods for managing environment secrets, such as GitHub Actions or similar services.

### 2.1 Required Variables

The following environment variables *must* be defined for the application to function correctly:

*   `VITE_APP_API_URL`: The base URL for the backend API. (Example: `https://api.example.com`)
*   `VITE_APP_MSW`: Enables/disables mockup server worker. (Example: `true` or `false`)
     notes: This variable can be true or false during local development, but must be *false* in .env.staging and .env.production.
*   *(Add other required variables here)*

### 2.2 Optional Variables

These variables are optional and provide additional configuration:

*   `VITE_PORT`: port to be used to run the app (by default, it sets to *3000*)
*   *(Add other optional variables here)*

## 3. Environment-Specific Configuration

*   **Development:** Use `.env.development` for local development settings. Create a `.env.development.local` file to override these settings locally without affecting other developers.
*   **Staging:** Use `.env.staging` for staging environment configuration.
*   **Production:** Use `.env.production` for production settings. Manage sensitive information securely on your hosting platform.

## 4. Running the Application Locally

**Local Development:**

1.  Install dependencies: `npm install`
2.  Create the local development environment variables file `.env.development.local` by copying the template `.example.env.development.local`.  The `.local` environment file overrides the corresponding `.env.development` settings.  This allows for flexible local configuration without modifying shared settings.  For example:

    ```
    .env.development
    VITE_API_URL=[http://development.com/api](http://development.com/api)

    .env.development.local
    VITE_API_URL=http://localhost:8080/api
    ```

    This configuration prioritizes the local API URL during development while shared envorinment development remain unchange.

3.  Start the development server: `npm start:dev`

**Development/Staging/Production:** Deployment to these environments is typically handled through CI/CD pipelines. Refer to the deployment documentation for specific instructions. (Link to deployment document if it exists)

## 5. Defining New Environment Variables
When defining new environment variables:

1.  **Documentation:** Clearly document the purpose and usage of the new variable in Section 2 of this document (Environment Variables).
2.  **Environment Files:** Add the variable and its appropriate value to the relevant environment files: `.env.development`, `.env.staging`, and `.env.production`.
3.  **Secrets Management (If Applicable):** If the variable contains sensitive data (e.g., API keys, passwords), do *not* store it directly in the environment files. Instead, update CI/CD pipeline (e.g., GitHub Actions, AWS CodePipeline) to securely inject the variable as an environment variable during the build/deployment process.

## 6. Troubleshooting

*   If you encounter issues, verify that your environment variables are correctly defined and set.
*   Consult the Web Admin repository's README or contact the development team for assistance.
