# Use Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose the port
EXPOSE 4444

# Start the application in preview mode
CMD ["npm", "run", "preview"]
