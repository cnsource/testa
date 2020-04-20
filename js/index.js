<script>
		Bmob.initialize("e47ba6e9c21a3ff5", "222333");
		Bmob.debug(true);
		function register(){
			let name = document.getElementById("username").value;
			let pwd = document.getElementById("pwd").value;
			if(name!=""&&pwd!=""){
				let params = {
				    username:name ,
				    password:pwd
				}
				Bmob.User.register(params).then(res => {
				  location.href = "login.html";
				}).catch(err => {
					alert(err.error);
				});
			}else{
				alert("用户名或密码不能为空")
			}
			
		}
	</script>