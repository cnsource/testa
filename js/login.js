<script>
		Bmob.initialize("e47ba6e9c21a3ff5", "222333");
		Bmob.debug(true);
		function login(){
			 Bmob.User.login(document.getElementById("username").value,document.getElementById("pwd").value).then(res => {
			   location.href = "userinfo.html";
			 }).catch(err => {
			  alert(err.error)
			});
		}
		function regist(){
			location.href = "index.html"
		}
	</script>