// Wait for document to be ready
$(document).ready(function() {					
	// Portfolio filtering
	$('.portfolio-filter a').on('click', function(event) {
		event.preventDefault();

		// Remove active class from all buttons
		$('.portfolio-filter a').removeClass('active');

		// Add active class to clicked button
		$(this).addClass('active');

		const filter = $(this).attr('data-filter');
		const items = $('.portfolio-items > div');

		items.each(function() {
			if (filter === '*') {
				$(this).show();
			} else if ($(this).hasClass(filter.substring(1))) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});

	// QuickCart modal trigger - Fixed!
	$('.quickcart-modal-trigger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#pluginModal').modal('show');
	});
	// Quantity Dropdown trigger - Fixed!
	$('.qty-dropdown-modal-trigger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#qtypluginModal').modal('show');
	});

	// categorization 
	$('.getProductCategories-modal-trigger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#getProductCategoriesModal').modal('show');
	});

	// ORDD CSV 
	$('.CouponCraft-modal-trigger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#CouponCraftModal').modal('show');
	});

	// ORDD CSV 
	$('.csvexporter-modal-trigger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#csvexporterModal').modal('show');
	});

	// COS Email 
	$('.cosemail-modal-trigger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#cosemailModal').modal('show');
	});

	// PRDD Project 
	$('.prddUI-modal-trigger').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('#prddUIModal').modal('show');
	});
});