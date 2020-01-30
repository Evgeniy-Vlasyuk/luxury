$(function () {
	$('.book-btn').click(function () {
		$('#modal1').addClass('show');
	});
	$('#modal1').click(function () {
		$('#modal1').removeClass('show');
	});
});