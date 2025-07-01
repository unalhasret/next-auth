# Next.js Authentication & Authorization System

This project is a modern authentication and authorization system built with **Auth0** and **NextAuth.js**.

## ⚙️ Setup & Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/unalhasret/next-auth.git
cd next-auth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory and add:

```env
# Auth0 Configuration
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
APP_BASE_URL='http://localhost:3000'
AUTH0_DOMAIN='The URL of your Auth0 tenant domain'
AUTH0_CLIENT_ID='Your Auth0 application's Client ID'
AUTH0_CLIENT_SECRET='Your Auth0 application's Client Secret'

# NextAuth Configuration
NEXTAUTH_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
NEXTAUTH_URL='http://localhost:3000'
```

### 4. Start the development server

```bash
npm run dev
```

## 🐳 Docker Support

Build and run with Docker:

```bash
docker build -t next-auth .
docker run -p 3000:3000 next-auth
```
