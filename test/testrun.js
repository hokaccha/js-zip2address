asyncTest("basic", function() {
	expect(3);
	zip2address('150-0001', function(address) {
		start();
		equal(address.all, '東京都渋谷区神宮前');
		equal(address.pref, '東京都');
		equal(address.city, '渋谷区神宮前');
	});
});

asyncTest("number only", function() {
	expect(3);
	zip2address('1500001', function(address) {
		start();
		equal(address.all, '東京都渋谷区神宮前');
		equal(address.pref, '東京都');
		equal(address.city, '渋谷区神宮前');
	});
});

asyncTest("undefined address", function() {
	expect(1);
	zip2address('0000000', function(address) {
		start();
		equal(address, undefined);
	});
});

asyncTest("invalid zip format", function() {
	expect(1);
	zip2address('hoge', function(address) {
		start();
		equal(address, undefined);
	});
});
