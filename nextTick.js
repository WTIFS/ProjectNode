//1 2 3 4
process.nextTick(function(){
	console.log('nextTick1延迟执行1');
	console.log('nextTick1延迟执行2');
});

process.nextTick(function(){
	console.log('nextTick1延迟执行3');
	process.nextTick(function(){
		console.log('nextTick1延迟执行4');
	})
})

//1 2 3 5 6 4 7
setImmediate(function(){
	console.log('setImmediate延迟执行1');
	console.log('setImmediate延迟执行2');
})

setImmediate(function(){
	console.log('setImmediate延迟执行3');
	setImmediate(function(){
		console.log('setImmediate延迟执行4');
	})	
	console.log('setImmediate延迟执行5');
	process.nextTick(function(){
		console.log('nextTick1延迟执行6');
		setImmediate(function(){
			console.log('setImmediate延迟执行7');
		})	
	});
})