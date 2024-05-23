# Use official Node.js image with the specified version and Alpine Linux version as the base image
FROM node:22-alpine3.19 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the React application with Vite
RUN npm run build

# Use lightweight Node.js LTS image for production
FROM node:22-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy only the built files from the previous stage
COPY --from=builder /app/dist /app/dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
