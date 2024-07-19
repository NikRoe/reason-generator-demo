# Flavour Pairing Reason Generator

This project is a Next.js application that utilizes the OpenAI API to generate reasons why certain food ingredient combinations are tasty. It provides a simple UI to interact with the model and fetch responses based on demo ingredients.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- An OpenAI API key (See: [OpenAI Signup](https://platform.openai.com/signup))

## Getting Started

Follow these steps to get your development env running:

1. **Clone the repository**

   ```bash
   git clone git@github.com/NikRoe/reason-generator-demo.git
   cd reason-generator-demo
   ```

2. **Install NPM packages**

Install all the necessary packages using npm:

```bash
npm install
```

3. **Set up environment variables**

Rename env.example to .env.local and update the variables:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Replace your_openai_api_key_here with your actual OpenAI API key.

4. **Run the development server**

Start the development server with the following command:

```bash
npm run dev
```

This command starts the Next.js application on http://localhost:3000. Open this URL in your browser to view the application.

5. **Looking for further information about the API?**

Take a look at the [official docs](https://platform.openai.com/docs/api-reference/chat) to see what else can be done with this API.
