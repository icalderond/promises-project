var $ =window.jQuery
var $msg=$('#messages')

function waitTwoSeconds(){
	return new Promise(function(done,reject){
		setTimeout(function(){
			done('capuccino')
		},2000)
		// setTimeout(function(){
		// 	reject('No tenemos expresso')
		// },2000)
	})
}

$msg.text('Quiero un cafe expresso')
waitTwoSeconds()
.then(function(cafe){ 
	$msg.text('Aqui tiene su '+cafe)
	return waitTwoSeconds()

})
.then(function(){	
	throw 'esta muy caliente el cafe' 
		$msg.text('Tomar el expresso')
	})
.catch(function(err){
	$msg.text(err).css('color','red')
})
