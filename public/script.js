// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
// ▓ CYBERSEC INFO STEALER DETECTION SYSTEM v2.1                           ▓
// ▓ DARK WEB INTELLIGENCE GATHERING PROTOCOL                              ▓  
// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// SYSTEM CONSTANTS
const API_BASE_URL = '/api';
const EMAIL_ENDPOINT = '/search-by-email?email=';
const USERNAME_ENDPOINT = '/search-by-username?username=';

// DOM INTERFACE ELEMENTS
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultsSection = document.getElementById('resultsSection');
const resultsContent = document.getElementById('resultsContent');
const errorSection = document.getElementById('errorSection');
const errorMessage = document.getElementById('errorMessage');
const newSearchBtn = document.getElementById('newSearchBtn');
const retryBtn = document.getElementById('retryBtn');

// GLOBAL SYSTEM VARIABLES
let currentSearchQuery = '';
let isSearching = false;

// ▓▓▓ SYSTEM INITIALIZATION ▓▓▓
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    searchInput.focus();
    initTerminalEffects();
    console.log('%c▓▓▓ CYBERSEC SYSTEM ONLINE ▓▓▓', 'color: #00ff00; font-weight: bold; font-size: 14px;');
});

// ▓▓▓ TERMINAL EFFECTS ▓▓▓
function initTerminalEffects() {
    // Blinking cursor effect
    const cursor = document.querySelector('.terminal-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 800);
    }
    
    // Terminal typing effect for loading
    let loadingMessages = [
        '▸ INITIALIZING DARK WEB CRAWLERS...',
        '▸ CONNECTING TO STEALER DATABASES...',
        '▸ DECRYPTING MALWARE LOGS...',
        '▸ CROSS-REFERENCING THREAT DATA...',
        '▸ ANALYZING COMPROMISED CREDENTIALS...'
    ];
    
    window.loadingMessages = loadingMessages;
}

// ▓▓▓ EVENT HANDLER SYSTEM ▓▓▓
function initializeEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    newSearchBtn.addEventListener('click', resetSearch);
    retryBtn.addEventListener('click', handleRetry);
    
    // Real-time input validation with hacker styling
    searchInput.addEventListener('input', function(e) {
        const value = e.target.value.trim();
        updateSearchButton(value);
    });
}

// ▓▓▓ SEARCH INTERFACE UPDATE ▓▓▓
function updateSearchButton(value) {
    if (value.length === 0) {
        searchBtn.disabled = true;
        searchBtn.innerHTML = '<span class="btn-text">[STANDBY]</span><i class="fas fa-power-off btn-icon"></i>';
    } else {
        searchBtn.disabled = false;
        const type = isEmail(value) ? 'EMAIL_TARGET' : 'USERNAME_TARGET';
        searchBtn.innerHTML = `<span class="btn-text">[SCAN_${type}]</span><i class="fas fa-crosshairs btn-icon"></i>`;
    }
}

// ▓▓▓ EMAIL VALIDATION PROTOCOL ▓▓▓
function isEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

// ▓▓▓ MAIN SEARCH EXECUTION ▓▓▓
async function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        showError('>>> ERROR: TARGET_INPUT_REQUIRED <<<\n\nPROTOCOL VIOLATION: Please enter an email or username to perform a scan.');
        return;
    }
    
    if (isSearching) return;
    
    currentSearchQuery = query;
    setSearchingState(true);
    
    try {
        const data = await performSearch(query);
        displayResults(data, query);
    } catch (error) {
        console.error('▓ SEARCH_ERROR:', error);
        showError(`>>> SYSTEM_ERROR_DETECTED <<<\n\n${error.message || 'System error detected. Restart scan protocol.'}`);
    } finally {
        setSearchingState(false);
    }
}

// ▓▓▓ API COMMUNICATION PROTOCOL ▓▓▓
async function performSearch(query) {
    const isEmailQuery = isEmail(query);
    const endpoint = isEmailQuery ? EMAIL_ENDPOINT : USERNAME_ENDPOINT;
    const param = isEmailQuery ? 'email' : 'username';
    const url = `${API_BASE_URL}${endpoint}${encodeURIComponent(query)}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('>>> TARGET_NOT_FOUND <<<\n\nNo information found in malware database.');
            } else if (response.status === 429) {
                throw new Error('>>> RATE_LIMIT_EXCEEDED <<<\n\nToo many requests. Please wait for the cooldown period.');
            } else if (response.status >= 500) {
                throw new Error('>>> SERVER_COMPROMISED <<<\n\nAPI server is experiencing issues. Please try again later.');
            } else {
                throw new Error(`>>> API_ERROR_${response.status} <<<\n\n${response.statusText}`);
            }
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            throw new Error('>>> CONNECTION_FAILED <<<\n\nCannot connect to dark web intelligence servers.');
        }
        throw error;
    }
}

// ▓▓▓ SYSTEM STATE MANAGEMENT ▓▓▓
function setSearchingState(searching) {
    isSearching = searching;
    
    if (searching) {
        hideAllSections();
        loadingSpinner.classList.remove('hidden');
        searchBtn.disabled = true;
        searchBtn.innerHTML = '<span class="btn-text">[SCANNING...]</span><i class="fas fa-spinner fa-spin btn-icon"></i>';
        
        // Add terminal loading effect
        setTimeout(() => {
            const loadingTexts = loadingSpinner.querySelectorAll('p');
            loadingTexts.forEach((text, index) => {
                setTimeout(() => {
                    text.style.opacity = '1';
                    text.style.transform = 'translateX(0)';
                }, index * 1000);
            });
        }, 100);
    } else {
        loadingSpinner.classList.add('hidden');
        updateSearchButton(searchInput.value.trim());
    }
}

// ▓▓▓ RESULTS DISPLAY SYSTEM ▓▓▓
function displayResults(data, query) {
    hideAllSections();
    resultsSection.classList.remove('hidden');
    
    const queryType = isEmail(query) ? 'EMAIL_TARGET' : 'USERNAME_TARGET';
    const hasStealers = data.stealers && data.stealers.length > 0;
    
    let html = '';
    
    // THREAT INTELLIGENCE SUMMARY
    if (hasStealers) {
        html += `
            <div class="summary-stats">
                <div class="stat-card">
                    <div class="stat-number">${data.stealers.length}</div>
                    <div class="stat-label">THREATS_FOUND</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${data.total_user_services || 0}</div>
                    <div class="stat-label">USER_SERVICES</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${data.total_corporate_services || 0}</div>
                    <div class="stat-label">CORP_SERVICES</div>
                </div>
            </div>
        `;
    }
    
    // THREAT ASSESSMENT ALERT
    if (hasStealers) {
        html += `
            <div class="alert alert-danger">
                <i class="fas fa-skull-crossbones"></i>
                <div>
                    <strong>▓▓▓ CRITICAL_SECURITY_BREACH_DETECTED ▓▓▓</strong><br>
                    TARGET: <strong>${query}</strong> [${queryType}]<br>
                    STATUS: <strong>COMPROMISED</strong> • Credentials found in stealer malware logs.<br>
                    RECOMMENDATION: Immediate password reset and enable 2FA required.
                </div>
            </div>
        `;
        
        // INDIVIDUAL THREAT ANALYSIS
        data.stealers.forEach((stealer, index) => {
            html += createStealerCard(stealer, index + 1);
        });
        
        // ADDITIONAL INTEL
        if (data.message) {
            // Clean message by removing promotional content (obfuscated patterns)
            const p1 = atob('XHMqVmlzaXRccytodHRwcz86XC9cL1teXHNdKy4qJA=='); // \s*Visit\s+https?:\/\/[^\s]+.*$
            const p2 = atob('XHMqdG9ccytkaXNjb3ZlclxzK2FkZGl0aW9uYWwuKiQ='); // \s*to\s+discover\s+additional.*$
            const p3 = atob('XHMqVmlzaXQ=') + '.*$'; // \s*Visit.*$
            
            const removePatterns = [
                new RegExp(p1, 'i'),
                new RegExp(p2, 'i'), 
                new RegExp(p3, 'i')
            ];
            
            let cleanMessage = data.message;
            removePatterns.forEach(pattern => {
                cleanMessage = cleanMessage.replace(pattern, '');
            });
            cleanMessage = cleanMessage.trim();
            
            html += `
                <div class="alert alert-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div><strong>>>> SYSTEM_MESSAGE <<<</strong><br>${cleanMessage}</div>
                </div>
            `;
        }
        
    } else {
        html += `
            <div class="alert alert-success">
                <i class="fas fa-shield-check"></i>
                <div>
                    <strong>▓▓▓ TARGET_CLEAN ▓▓▓</strong><br>
                    TARGET: <strong>${query}</strong> [${queryType}]<br>
                    STATUS: <strong>NOT_COMPROMISED</strong> • No records found in stealer databases.<br>
                    ASSESSMENT: Target credentials appear secure from known malware.
                </div>
            </div>
        `;
    }
    
    resultsContent.innerHTML = html;
}

// ▓▓▓ THREAT CARD GENERATOR ▓▓▓
function createStealerCard(stealer, index) {
    const compromiseDate = stealer.date_compromised 
        ? new Date(stealer.date_compromised).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        : 'TIMESTAMP_UNKNOWN';
    
    const stealerFamily = stealer.stealer_family || 'GENERIC_MALWARE';
    
    let html = `
        <div class="stealer-card">
            <div class="stealer-header">
                <div class="stealer-family">
                    <i class="fas fa-biohazard"></i> ${stealerFamily.toUpperCase()} [THREAT_${String(index).padStart(3, '0')}]
                </div>
                <div class="compromise-date">
                    <i class="fas fa-clock"></i> COMPROMISED: ${compromiseDate}
                </div>
            </div>
            
            <div class="stealer-details">
    `;
    
    // SYSTEM INTELLIGENCE
    if (stealer.computer_name !== 'Not Found') {
        html += createDetailGroup('HOSTNAME', stealer.computer_name, 'fas fa-desktop');
    }
    
    if (stealer.operating_system !== 'Not Found') {
        html += createDetailGroup('OPERATING_SYSTEM', stealer.operating_system, 'fab fa-windows');
    }
    
    if (stealer.malware_path !== 'Not Found' && stealer.malware_path) {
        html += createDetailGroup('MALWARE_PATH', stealer.malware_path, 'fas fa-folder-open');
    }
    
    if (stealer.ip !== 'Not Found' && stealer.ip) {
        html += createDetailGroup('IP_ADDRESS', stealer.ip, 'fas fa-network-wired');
    }
    
    // SECURITY INTEL
    if (stealer.antiviruses !== 'Not Found' && stealer.antiviruses && stealer.antiviruses.length > 0) {
        const antivirusText = Array.isArray(stealer.antiviruses) 
            ? stealer.antiviruses.join(' | ') 
            : stealer.antiviruses;
        html += createDetailGroup('SECURITY_SOFTWARE', antivirusText, 'fas fa-shield-virus');
    }
    
    // SERVICE COUNTS
    if (stealer.total_user_services !== undefined) {
        html += createDetailGroup('USER_SERVICES', stealer.total_user_services, 'fas fa-user');
    }
    
    if (stealer.total_corporate_services !== undefined) {
        html += createDetailGroup('CORPORATE_SERVICES', stealer.total_corporate_services, 'fas fa-building');
    }
    
    html += `</div>`;
    
    // CREDENTIAL INTELLIGENCE
    if ((stealer.top_passwords && stealer.top_passwords.length > 0) || 
        (stealer.top_logins && stealer.top_logins.length > 0)) {
        html += `
            <div class="passwords-logins">
        `;
        
        if (stealer.top_passwords && stealer.top_passwords.length > 0) {
            html += `
                <div class="credential-group">
                    <h4>
                        <i class="fas fa-key"></i>
                        COMPROMISED_PASSWORDS [${stealer.top_passwords.length}]
                    </h4>
                    <ul class="credential-list">
            `;
            stealer.top_passwords.forEach(password => {
                html += `<li>PASSWORD: ${password}</li>`;
            });
            html += `</ul></div>`;
        }
        
        if (stealer.top_logins && stealer.top_logins.length > 0) {
            html += `
                <div class="credential-group">
                    <h4>
                        <i class="fas fa-user-secret"></i>
                        COMPROMISED_LOGINS [${stealer.top_logins.length}]
                    </h4>
                    <ul class="credential-list">
            `;
            stealer.top_logins.forEach(login => {
                html += `<li>LOGIN: ${login}</li>`;
            });
            html += `</ul></div>`;
        }
        
        html += `</div>`;
    }
    
    html += `</div>`;
    
    return html;
}

// ▓▓▓ DETAIL GROUP CONSTRUCTOR ▓▓▓
function createDetailGroup(label, value, icon) {
    return `
        <div class="detail-group">
            <div class="detail-label">
                <i class="${icon}"></i> ${label}
            </div>
            <div class="detail-value">${value}</div>
        </div>
    `;
}

// ▓▓▓ ERROR DISPLAY SYSTEM ▓▓▓
function showError(message) {
    hideAllSections();
    errorSection.classList.remove('hidden');
    errorMessage.innerHTML = message.replace(/\n/g, '<br>');
}

// ▓▓▓ INTERFACE CONTROL ▓▓▓
function hideAllSections() {
    loadingSpinner.classList.add('hidden');
    resultsSection.classList.add('hidden');
    errorSection.classList.add('hidden');
}

// ▓▓▓ RESET PROTOCOL ▓▓▓
function resetSearch() {
    hideAllSections();
    searchInput.value = '';
    searchInput.focus();
    updateSearchButton('');
    currentSearchQuery = '';
    console.log('%c▓▓▓ SYSTEM RESET - READY FOR NEW SCAN ▓▓▓', 'color: #00ff00; font-weight: bold;');
}

// ▓▓▓ RETRY MECHANISM ▓▓▓
function handleRetry() {
    if (currentSearchQuery) {
        searchInput.value = currentSearchQuery;
        handleSearch();
    } else {
        resetSearch();
    }
}

// ▓▓▓ UTILITY FUNCTIONS ▓▓▓
function formatFileSize(bytes) {
    if (bytes === 0) return '0 BYTES';
    const k = 1024;
    const sizes = ['BYTES', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatDate(dateString) {
    if (!dateString) return 'TIMESTAMP_UNKNOWN';
    try {
        const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        return 'TIMESTAMP_ERROR';
    }
}

// ▓▓▓ SYSTEM INITIALIZATION COMPLETE ▓▓▓
console.log('%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', 'color: #00ff00;');
console.log('%c▓ CYBERSEC STEALER DETECTION SYSTEM v2.1 - ONLINE', 'color: #00ff00; font-weight: bold;');
console.log('%c▓ DARK WEB INTELLIGENCE MODULE - ACTIVE', 'color: #00ff00; font-weight: bold;');  
console.log('%c▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓', 'color: #00ff00;'); 