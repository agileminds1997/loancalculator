class CountrySubstringAnalyzer {
    constructor(countries, substringLength = 2) {
        this.countries = countries;
        this.substringLength = substringLength;
        this.results = this.analyze();
    }

    // Clean and normalize country names
    cleanCountryName(name) {
        return name.replace(/\s+/g, '').toLowerCase();
    }

    // Extract all substrings of specified length from a string
    extractSubstrings(str) {
        const substrings = [];
        for (let i = 0; i <= str.length - this.substringLength; i++) {
            substrings.push(str.substring(i, i + this.substringLength));
        }
        return substrings;
    }

    // Main analysis function
    analyze() {
        const substringData = new Map();
        
        // Process each country
        this.countries.forEach((country, index) => {
            const cleanName = this.cleanCountryName(country);
            const substrings = this.extractSubstrings(cleanName);
            
            // Track each substring
            substrings.forEach(substring => {
                if (!substringData.has(substring)) {
                    substringData.set(substring, {
                        count: 0,
                        countries: [],
                        substring: substring
                    });
                }
                
                const data = substringData.get(substring);
                data.count++;
                
                // Add country if not already included
                if (!data.countries.includes(country)) {
                    data.countries.push(country);
                }
            });
        });

        // Convert to array and sort by frequency (descending)
        return Array.from(substringData.values())
            .sort((a, b) => b.count - a.count);
    }

    // Get results sorted by frequency
    getResultsByFrequency() {
        return this.results;
    }

    // Get results sorted alphabetically
    getResultsAlphabetically() {
        return [...this.results].sort((a, b) => a.substring.localeCompare(b.substring));
    }

    // Get only unique substrings (no duplicates)
    getUniqueSubstrings() {
        return this.results.map(item => item.substring);
    }

    // Get substrings with minimum frequency
    getSubstringsWithMinFrequency(minFreq) {
        return this.results.filter(item => item.count >= minFreq);
    }

    // Display results in a formatted way
    displayResults(container = document.body) {
        let html = `
            <h2>Substring Analysis (Length: ${this.substringLength})</h2>
            <h3>Total unique substrings: ${this.results.length}</h3>
            <h3>Results by frequency:</h3>
        `;

        this.results.forEach(item => {
            html += `
                <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc;">
                    <strong>"${item.substring}"</strong> - appears ${item.count} times<br>
                    <small>Found in: ${item.countries.join(', ')}</small>
                </div>
            `;
        });

        if (container) {
            container.innerHTML = html;
        }
        return html;
    }

    // Export data as JSON
    exportAsJSON() {
        return JSON.stringify(this.results, null, 2);
    }

    // Export data as CSV
    exportAsCSV() {
        let csv = 'Substring,Frequency,Countries\n';
        this.results.forEach(item => {
            csv += `"${item.substring}",${item.count},"${item.countries.join('; ')}"\n`;
        });
        return csv;
    }
}

// Your countries array
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cabo Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Democratic Republic of the Congo", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Solomon Islands", "Marshall Islands", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan ", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Peru", "Poland", "Paraguay", "Portugal", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "eSwatini", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

// Usage examples:

// Create analyzer for 2-character substrings (like your original)
const analyzer2 = new CountrySubstringAnalyzer(countries, 2);

// Display results
console.log('=== 2-Character Substring Analysis ===');
console.log(`Total unique substrings: ${analyzer2.results.length}`);

// Show top 10 most frequent substrings
console.log('\nTop 10 most frequent 2-character substrings:');
analyzer2.getResultsByFrequency().slice(0, 10).forEach(item => {
    console.log(`"${item.substring}" appears ${item.count} times in: ${item.countries.slice(0, 3).join(', ')}${item.countries.length > 3 ? '...' : ''}`);
});

// Create analyzer for 3-character substrings
const analyzer3 = new CountrySubstringAnalyzer(countries, 3);
console.log('\n=== 3-Character Substring Analysis ===');
console.log(`Total unique substrings: ${analyzer3.results.length}`);

// Show top 5 most frequent 3-character substrings
console.log('\nTop 5 most frequent 3-character substrings:');
analyzer3.getResultsByFrequency().slice(0, 5).forEach(item => {
    console.log(`"${item.substring}" appears ${item.count} times in: ${item.countries.join(', ')}`);
});

// Get substrings that appear in at least 3 countries
console.log('\nSubstrings appearing in 3+ countries:');
analyzer2.getSubstringsWithMinFrequency(3).forEach(item => {
    console.log(`"${item.substring}" - ${item.count} times`);
});

// Simple function version (like your original approach)
function analyzeSubstrings(countries, length = 2) {
    const substringCounts = {};
    const substringCountries = {};
    
    countries.forEach(country => {
        const cleaned = country.replace(/\s+/g, '').toLowerCase();
        
        for (let i = 0; i <= cleaned.length - length; i++) {
            const substring = cleaned.substring(i, i + length);
            
            substringCounts[substring] = (substringCounts[substring] || 0) + 1;
            
            if (!substringCountries[substring]) {
                substringCountries[substring] = [];
            }
            if (!substringCountries[substring].includes(country)) {
                substringCountries[substring].push(country);
            }
        }
    });
    
    // Convert to sorted array
    return Object.keys(substringCounts)
        .map(substring => ({
            substring,
            count: substringCounts[substring],
            countries: substringCountries[substring]
        }))
        .sort((a, b) => b.count - a.count);
}

// Simple usage
const simpleResults = analyzeSubstrings(countries, 2);
console.log('\n=== Simple Function Results ===');
console.log('Top 5:', simpleResults.slice(0, 5));
