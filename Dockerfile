# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the dev server runs on (Vite default: 5173, React default: 3000)
EXPOSE 5174

# Start the development server with auto-reload
CMD ["npm", "run", "dev"]
