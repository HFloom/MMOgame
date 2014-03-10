/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY) {
	var x = startX,
		y = startY,
		id,
		moveAmount = 2;
	
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
		
		ctx.fillStyle = 'black';
		ctx.strokeStyle = 'black';
	};

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		update: update,
		draw: draw
	}
};