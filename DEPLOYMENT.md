# Deployment Guide - The Local Guide SATARA

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This starts both frontend (port 3000) and backend (port 3001)

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api/health

## Production Deployment

### Option 1: Traditional Server Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Set environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your production values
   ```

3. **Start production server:**
   ```bash
   npm start
   ```

### Option 2: Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t local-guide-satara .
docker run -p 3001:3001 local-guide-satara
```

### Option 3: Vercel/Netlify Deployment

1. **Frontend (Vercel/Netlify):**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Backend (Railway/Render):**
   - Deploy the server folder
   - Set start command: `node server/index.js`

## Environment Variables

- `VITE_OPENAI_API_KEY`: OpenAI API key (optional for demo)
- `PORT`: Server port (default: 3001)
- `NODE_ENV`: Environment (development/production)

## Integrating Real AI

To use actual OpenAI API instead of mock responses:

1. Get OpenAI API key from https://platform.openai.com/
2. Set `VITE_OPENAI_API_KEY` in your environment
3. Update `server/index.js` to use OpenAI API:

```javascript
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Replace MockAIService with actual OpenAI calls
```

## Performance Optimization

1. **Enable gzip compression**
2. **Add CDN for static assets**
3. **Implement caching for API responses**
4. **Add rate limiting for API endpoints**
5. **Monitor with tools like New Relic or DataDog**