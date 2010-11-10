asyncTest("basic", function() {
	expect(3);
	zip2address('150-0001', function(address) {
		start();
		equal(address.all, '東京都渋谷区神宮前');
		equal(address.pref, '東京都');
		equal(address.city, '渋谷区神宮前');
	});
});
