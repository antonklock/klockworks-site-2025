This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset name (e.g., "production")
- `SANITY_REVALIDATE_SECRET` - Secret token for webhook verification (used for on-demand revalidation)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Sanity Webhook Configuration

To enable automatic revalidation when content is published in Sanity Studio, configure a webhook:

1. Go to your Sanity project dashboard: https://www.sanity.io/manage
2. Navigate to your project → **API** → **Webhooks**
3. Click **Create webhook**
4. Configure the webhook:
   - **Name**: "Next.js Revalidation" (or any name you prefer)
   - **URL**: `https://yourdomain.com/api/revalidate` (replace with your production domain)
   - **Dataset**: Select your dataset
   - **Trigger on**: Select "Create", "Update", and "Delete" for published documents
   - **Filter**: `_type == "project"`
   - **Projection**: `{ _type, slug }`
   - **HTTP method**: POST
   - **API version**: Latest
   - **Secret**: Use the same value as `SANITY_REVALIDATE_SECRET` from your environment variables (this is used for signature verification)
   - **Include drafts**: No (unchecked)
5. Save the webhook

When you publish a project in Sanity Studio, the webhook will automatically trigger and revalidate the corresponding project page on your Next.js site. The webhook uses `next-sanity`'s built-in signature verification for security.

### Testing Locally

For local development, you can use a tool like [ngrok](https://ngrok.com/) to expose your local server:

1. Start your Next.js dev server: `npm run dev`
2. In another terminal, run: `ngrok http 3000`
3. Use the ngrok URL in your Sanity webhook configuration (e.g., `https://your-ngrok-url.ngrok.io/api/revalidate`)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
