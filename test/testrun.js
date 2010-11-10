test("basic", function() {
	zip2address(1500001, function(address) {
		equal(address.all, '東京都渋谷区神宮前');
		equal(address.pref, '東京都');
		equal(address.city, '渋谷区神宮前');
	});
});
