// dashboard.js

$(document).ready(function() {
    // Initial setup
    showSection('summary');

    // Click event handler for navigation links
    $('nav a').click(function(e) {
        e.preventDefault();
        var sectionId = $(this).attr('id');
        showSection(sectionId);
    });

    // Click event handler for logout button
    $('#logout-btn').click(function() {
        onclick = "signin.html"
        // Perform logout action (e.g., redirect to logout endpoint)
        // Example:
        // window.location.href = '/logout';
    });

    // Example function to show/hide sections
    function showSection(sectionId) {
        $('section').addClass('hidden');
        $('#' + sectionId).removeClass('hidden');
        $('nav a').removeClass('active');
        $('#' + sectionId).addClass('active');
        
        // If the section content is not loaded yet, fetch it
        if ($('#' + sectionId).html().trim() === '') {
            loadSectionContent(sectionId);
        }
    }

    // Example function to fetch section content dynamically
    function loadSectionContent(sectionId) {
        var urlMap = {
            'summary': '/api/summary',
            'orders': '/api/orders',
            'profile': '/api/profile',
            'settings': '/api/settings'
        };

        // Fetch section content via AJAX
        $.ajax({
            url: urlMap[sectionId],
            method: 'GET',
            success: function(response) {
                // Update section content
                $('#' + sectionId).html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error loading section content:', error);
            }
        });
    }

    // Example function to fetch and display user data
    function fetchUserData() {
        // Example AJAX request to fetch user data from backend
        $.ajax({
            url: '/api/user',
            method: 'GET',
            success: function(response) {
                // Update UI with user data
                $('#username').text(response.username);
                $('#total-orders-value').text(response.totalOrders);
                $('#total-revenue-value').text(response.totalRevenue);
                // Add code to populate other sections with user data
            },
            error: function(xhr, status, error) {
                console.error('Error fetching user data:', error);
            }
        });
    }

    // Fetch user data when the page loads
    fetchUserData();
});
