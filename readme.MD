# 🌐 CORS Proxy Server
![Logo](/logo.jpg "Logo CORS Proxy")

## 📋 Overview

This is a simple CORS (Cross-Origin Resource Sharing) proxy server built with Express.js. It allows you to bypass CORS restrictions by proxying requests through this server.

## 🚀 Features

- 🔓 Bypasses CORS restrictions
- 🛠 Built with Express.js
- 🔄 Uses `request` library for proxying
- 🌍 Allows requests from any origin

## 🛠 Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/cors-proxy.git
   ```

2. Navigate to the project directory:
   ```
   cd cors-proxy
   ```

3. Install dependencies:
   ```
   npm install
   ```

## 🏃‍♂️ Usage

1. Start the server:
   ```
   node server.js
   ```

2. The server will start running on `http://localhost:3000`.

## 📖 API Reference

### GET /proxy

Proxies a GET request to the specified URL.

Query Parameters:
- `url` (required): The URL to proxy the request to.

Example:
```
http://localhost:3000/proxy?url=https://api.example.com/data
```

## 💻 Code Explanation

- The server uses Express.js to create a web server.
- CORS middleware is added to allow requests from any origin.
- The `/proxy` route handles GET requests:
  - It extracts the `url` parameter from the query string.
  - If no URL is provided, it returns a 400 error.
  - It uses the `request` library to pipe the response from the specified URL back to the client.

## 🔒 Security Considerations

- This proxy allows requests from any origin. In a production environment, you may want to restrict this to specific origins.
- There's no validation on the URLs that can be accessed through this proxy. Consider implementing a whitelist of allowed domains for added security.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/cors-proxy/issues).

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.