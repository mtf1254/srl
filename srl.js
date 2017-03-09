var MessageBox = React.createClass({
			alertMe: function(){
				alert('你刚才点了我一下。。。。');
			},
			render:function(){
				return ( <h1 onClick={this.alertMe}>你好世界！！！</h1> )
			}
		});

		React.render( <MessageBox/>, 
			document.getElementById('app'),
			function(){
				console.log('渲染完成啦！！');
			}
		)

		
	alert('我是马腾飞')
