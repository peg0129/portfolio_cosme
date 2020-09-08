const ham = document.getElementById('ham');  //html内のid:hamを検索しタグ情報取得→定数hamへ
const nav_sp = document.getElementById('nav_sp');　//同上処理
ham.addEventListener('click', function() { //id：ham指定したタグ要素がクリックされるとイベント発生
	ham.classList.toggle('clicked'); //class:clickedをタグに追加
	line1.classList.toggle('clicked');
	line2.classList.toggle('clicked');
	line3.classList.toggle('clicked');
  nav_sp.classList.toggle('clicked'); //同上処理
});
