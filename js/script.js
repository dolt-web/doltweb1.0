document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById('search-form');
    const typeSelect = document.getElementById('type');
    const landlordFields = document.getElementById('landlord-fields');
    const tenantFields = document.getElementById('tenant-fields');
    const resultsDiv = document.getElementById('results');

    // Toggle fields based on search type
    typeSelect.addEventListener('change', () => {
        if (typeSelect.value === 'landlord') {
            landlordFields.style.display = 'block';
            tenantFields.style.display = 'none';
        } else if (typeSelect.value === 'tenant') {
            landlordFields.style.display = 'none';
            tenantFields.style.display = 'block';
        }
    });

    // Handle form submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(searchForm);
        const searchType = formData.get('type');

        if (searchType === 'landlord') {
            const postalCode = formData.get('postalCode');
            const unitNumber = formData.get('unitNumber');

            // Call the search function for landlords
            console.log(`Searching landlord reviews for postal code: ${postalCode}, unit: ${unitNumber}`);
            searchLandlordReviews(postalCode, unitNumber);
        } else if (searchType === 'tenant') {
            const idNumber = formData.get('idNumber');

            // Call the search function for tenants
            console.log(`Searching tenant reviews for ID: ${idNumber}`);
            searchTenantReviews(idNumber);
        }
    });

    // Placeholder functions for searching (to be implemented)
    function searchLandlordReviews(postalCode, unitNumber) {
        resultsDiv.innerHTML = `Searching landlord reviews for postal code: ${postalCode}, unit: ${unitNumber}...`;
        // TODO: Replace this with API or database call
    }

    function searchTenantReviews(idNumber) {
        resultsDiv.innerHTML = `Searching tenant reviews for ID: ${idNumber}...`;
        // TODO: Replace this with API or database call
    }
});
