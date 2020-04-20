<script>
			Bmob.initialize("e47ba6e9c21a3ff5", "222333");
			Bmob.debug(true);
			function loaddata(){
				const query = Bmob.Query("article");
				query.include("author","_User")
				query.find().then(res => {
				  for (var i=0;i<res.length;i++)
				  { 
					  var para = document.createElement("div");
					  para.setAttribute("class","mdui-card mdui-col-sm-4 mdui-col-md-4 mdui-col-lg-2 mdui-hoverable");
					  para.setAttribute("id","bool");
					  var content = document.createElement("div");
					  var contenttext = document.createTextNode(res[i].content);
					  content.setAttribute("id","content")
					 
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
					  var pool = document.getElementById("moodpool");
				      pool.appendChild(para)
				  }
				});
			}
		</script>