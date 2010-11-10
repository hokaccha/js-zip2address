# zip2address.js

* google日本語入力APIを利用して郵便番号から住所を検索します
* kotarokさんの[https://github.com/kotarok/jQuery.zip2addr](jQuery.zip2addr)を元にしています
* jQuery.zip2addrとの違いはjQueryに依存せず、インタフェースをシンプルにしている点です
* 郵便番号を受け取ってcallbackで住所を受け取るだけなので、柔軟性があります
* jQuery.zip2addrより色々やってくれないので簡単に使いたい場合はjQuery.zip2addrのほうがいいでしょう

## code

    <script src='zip2address.js'></script>
    <script>
        zip2address(zip, function(address) { ... });
    </script>
