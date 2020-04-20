<script>
			Bmob.initialize("e47ba6e9c21a3ff5", "222333");
			Bmob.debug(true);
			function getLoginInfo(){
				let user = Bmob.User.current();
				var spanTag = document.getElementById("info");
				spanTag.innerHTML = user.username;
			}
			function putOut(){
				var content = document.getElementById("article").value;
				if (content==""){
					alert("看来你是没什么心情呀")
					return;
				}
				let user = Bmob.User.current();
				const pointer = Bmob.Pointer('_User')
				const poiID = pointer.set(user.objectId)
				const query = Bmob.Query('article');
				query.set("author",poiID)
				query.set("content",content)
				query.save().then(res => {
				  document.getElementById("state").innerHTML = "发布成功"
				}).catch(err => {
				  document.getElementById("state").innerHTML = "发布失败"+err.error;
				})
			}
		</script>