# GPT to Notion Serverless API (Vercel)

This is a Vercel-compatible serverless function that receives a POST request from GPT-4 and forwards it to a Make Webhook to save content into Notion.

## Setup

1. Fork this repository to your GitHub account.
2. Import the repository in Vercel.
3. Set environment variables:
   - `OPENAI_API_KEY`
   - `WEBHOOK_URL`
4. Deploy and get your endpoint URL.
