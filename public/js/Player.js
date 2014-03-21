/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		id,
		moveAmount = 2,
		targetX = startX,
		targetY = startY,
		direction = 0;
	
	// Getters and setters
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};
	
	var setTarget = function(newX, newY) {
		targetX = newX;
		targetY = newY;
		//alert("Set Target To: " + targetX + ", " + targetY);
	}

	// Update player position
	var update = function(keys) {
		// Previous position
		var prevX = x,
			prevY = y;

		// Up key takes priority over down
		if (keys.up) {
			y -= moveAmount;
		} else if (keys.down) {
			y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			x -= moveAmount;
		} else if (keys.right) {
			x += moveAmount;
		};
		
		console.log( Math.round(Math.atan2(targetX - x, targetY - y) * 180 / Math.PI));
		direction = Math.round(Math.atan2(targetX - x, targetY - y) * 180 / Math.PI);
		
		x += 1 * Math.sin(direction);
		y += 1 * Math.cos(direction);
		
		return (prevX != x || prevY != y) ? true : false;
	};

	// Draw player
	var draw = function(ctx) {
		ctx.fillStyle = 'red';
		ctx.strokeStyle = 'green';
		
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, ctx.canvas.height);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(ctx.canvas.width, y);
		ctx.stroke();
		
		ctx.fillRect(x - 5, y - 5, 10, 10);
		
		ctx.fillText("X " + x + " Y " + y, x + 8, y - 6);
		
		ctx.fillStyle = 'red';
		ctx.strokeStyle = 'red';
		
		ctx.fillRect(targetX - 5, targetY - 5, 10, 10);
		
		ctx.fillStyle = 'black';
		ctx.strokeStyle = 'black';
		
	};

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		setTarget: setTarget,
		update: update,
		draw: draw
	}
};