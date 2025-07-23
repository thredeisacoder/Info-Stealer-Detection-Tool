const express = require('express');
const cors = require('cors');
const axios = require('axios');
const helmet = require('helmet');
const path = require('path');
const securityModule = require('../config/security.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'"]
        }
    }
}));

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// API Configuration handled by external module for security

// API Routes

// Search by email
app.get('/api/search-by-email', async (req, res) => {
    try {
        const { email } = req.query;
        
        if (!email) {
            return res.status(400).json({
                error: 'Email parameter is required'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Invalid email format'
            });
        }

        console.log(`Searching for email: ${email}`);

        const response = await axios.get(securityModule.generateSecureUrl('email'), {
            params: { email },
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Info-Stealer-Detection-Tool/1.0'
            },
            timeout: 30000 // 30 seconds timeout
        });

        res.json(response.data);

    } catch (error) {
        console.error('Error searching by email:', error.message);
        
        if (error.response) {
            // API returned an error response
            res.status(error.response.status).json({
                error: error.response.data?.message || 'API Error',
                status: error.response.status
            });
        } else if (error.code === 'ECONNABORTED') {
            // Timeout error
            res.status(408).json({
                error: 'Request timeout. Please try again.'
            });
        } else {
            // Network or other error
            res.status(500).json({
                error: 'Failed to connect to Hudson Rock API'
            });
        }
    }
});

// Search by username
app.get('/api/search-by-username', async (req, res) => {
    try {
        const { username } = req.query;
        
        if (!username) {
            return res.status(400).json({
                error: 'Username parameter is required'
            });
        }

        // Basic username validation (no special characters that could break the API)
        if (username.length < 2 || username.length > 50) {
            return res.status(400).json({
                error: 'Username must be between 2 and 50 characters'
            });
        }

        console.log(`Searching for username: ${username}`);

        const response = await axios.get(securityModule.generateSecureUrl('username'), {
            params: { username },
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Info-Stealer-Detection-Tool/1.0'
            },
            timeout: 30000 // 30 seconds timeout
        });

        res.json(response.data);

    } catch (error) {
        console.error('Error searching by username:', error.message);
        
        if (error.response) {
            // API returned an error response
            res.status(error.response.status).json({
                error: error.response.data?.message || 'API Error',
                status: error.response.status
            });
        } else if (error.code === 'ECONNABORTED') {
            // Timeout error
            res.status(408).json({
                error: 'Request timeout. Please try again.'
            });
        } else {
            // Network or other error
            res.status(500).json({
                error: 'Failed to connect to Hudson Rock API'
            });
        }
    }
});

// Search by domain
app.get('/api/search-by-domain', async (req, res) => {
    try {
        const { domain } = req.query;
        
        if (!domain) {
            return res.status(400).json({
                error: 'Domain parameter is required'
            });
        }

        // Validate domain format
        const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
        if (!domainRegex.test(domain)) {
            return res.status(400).json({
                error: 'Invalid domain format'
            });
        }

        console.log(`Searching for domain: ${domain}`);

        const response = await axios.get(securityModule.generateSecureUrl('domain'), {
            params: { domain },
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Info-Stealer-Detection-Tool/1.0'
            },
            timeout: 30000 // 30 seconds timeout
        });

        res.json(response.data);

    } catch (error) {
        console.error('Error searching by domain:', error.message);
        
        if (error.response) {
            // API returned an error response
            res.status(error.response.status).json({
                error: error.response.data?.message || 'API Error',
                status: error.response.status
            });
        } else if (error.code === 'ECONNABORTED') {
            // Timeout error
            res.status(408).json({
                error: 'Request timeout. Please try again.'
            });
        } else {
            // Network or other error
            res.status(500).json({
                error: 'Failed to connect to Hudson Rock API'
            });
        }
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'Info Stealer Detection Tool'
    });
});

// Catch-all route to serve index.html for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('');
    console.log('🚀 Info Stealer Detection Tool Started');
    console.log('═══════════════════════════════════════');
    console.log(`🌐 Server running on: http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api`);
    console.log('🔍 Ready to detect info stealers!');
    console.log('');
    console.log('Available endpoints:');
    console.log(`  GET  /api/search-by-email?email=<email>`);
    console.log(`  GET  /api/search-by-username?username=<username>`);
    console.log(`  GET  /api/search-by-domain?domain=<domain>`);
    console.log(`  GET  /api/health`);
    console.log('');
    console.log('Press Ctrl+C to stop the server');
    console.log('═══════════════════════════════════════');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\nSIGINT received. Shutting down gracefully...');
    process.exit(0);
}); 