<script>
			Bmob.initialize("e47ba6e9c21a3ff5", "222333");
			Bmob.debug(true);
			function loaddata(){
				document.getElementById("allbool").remove()
				const query = Bmob.Query("article");
				query.include("author","_User")
				query.find().then(res => {
					var allbool = document.createElement("div");
					allbool.setAttribute("id","allbool");
				  for (var i=0;i<res.length;i++)
				  { 
					  var para = document.createElement("div");
					  para.setAttribute("class","mdui-card mdui-col-sm-4 mdui-col-md-4 mdui-col-lg-2 mdui-hoverable");
					  para.setAttribute("id","bool");
					  var content = document.createElement("font");
					  var contenttext = document.createTextNode(res[i].content);
					  content.setAttribute("id","content")
					  content.setAttribute("class","mdui-text-truncate")
					  
					  var del = document.createElement("div");
					  var deltext = document.createTextNode("删除");
					  del.setAttribute("id","dele")
					  del.setAttribute("onclick","deleteMood('"+res[i].objectId+"')")
					  del.setAttribute("class","mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent")
					  del.appendChild(deltext)
					  
					  var name = document.createElement("h3");
					  name.setAttribute("id","name")
					  var nametext = document.createTextNode(res[i].author.username)
					  var time = document.createElement("font");
					  var br = document.createElement("br");
					  var timetext = document.createTextNode(res[i].createdAt)
					  time.setAttribute("id","time")
					  content.appendChild(contenttext);
					  name.appendChild(nametext)
					  time.appendChild(timetext)
					  para.appendChild(name);
					  para.appendChild(content);
					  para.appendChild(br);
					  para.appendChild(time);
					  para.appendChild(del)
					  allbool.appendChild(para)
					  var pool = document.getElementById("moodpool");
				      pool.appendChild(allbool)
				  }
				});
			}
			function  deleteMood(objectId){
				var b = confirm("你确定要删除这个心情？");
				if(b == false){
					return;
				}
				const query = Bmob.Query('article');
				query.destroy(objectId).then(res => {
				   loaddata()
				}).catch(err => {
				    alert("无法删除")
				})
			}
		</script>