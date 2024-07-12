
window.onload = function() {
    var canvas = document.getElementById('myfriend');
    var ctx = canvas.getContext('2d');
    function drawbonobono() {
		drawFace();
        drawBody();
		
	}

    function drawFace() {
        // 얼굴
        ctx.beginPath();
        ctx.arc(250, 210, 80, 0, Math.PI * 2, true); 
        ctx.fillStyle = '#6ECFF6'; 
        ctx.fill();
        ctx.stroke();

       
        ctx.beginPath();
        ctx.arc(220, 180, 6, 0, Math.PI * 2, true); // 왼쪽 눈
        ctx.arc(280, 180, 6, 0, Math.PI * 2, true); // 오른쪽 눈
        ctx.fillStyle = '#000'; // 검은 색
        ctx.fill();

        // 코
        ctx.beginPath();
        ctx.arc(250, 220, 8, 0, Math.PI * 2, true); 
        ctx.fillStyle = '#000'; 
        ctx.fill();

        // 수염
        ctx.beginPath();
        ctx.moveTo(200,220);
        ctx.lineTo(220,220);
        ctx.moveTo(200,235);
        ctx.lineTo(220,230);
        ctx.moveTo(200,205);
        ctx.lineTo(220,210);
        
        ctx.moveTo(280,220);
        ctx.lineTo(300,220);
        ctx.moveTo(280,230);
        ctx.lineTo(300,235);
        ctx.moveTo(280,210);
        ctx.lineTo(300,205);
        
        ctx.stroke();
    }

    function drawBody() {
		
	        
        ctx.beginPath();
        ctx.ellipse(250, 380, 60, 90, 0, 0, Math.PI * 2); 
        ctx.fillStyle = '#6ECFF6'; 
        ctx.fill();
        ctx.stroke();
        
        // 팔 (왼쪽)
        ctx.beginPath();
        ctx.ellipse(190, 350, 15, 30, Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = '#6ECFF6'; 
        ctx.fill();
        ctx.stroke();

        // 팔 (오른쪽)
        ctx.beginPath();
        ctx.ellipse(310, 350, 15, 30, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = '#6ECFF6'; 
        ctx.fill();
        ctx.stroke();

        
        ctx.beginPath();
        ctx.ellipse(250, 380, 40, 70, 0, 0, Math.PI * 2); 
        ctx.fillStyle = '#FFF'; 
        ctx.fill();
        ctx.stroke();
        
        // 다리 (왼쪽)
        ctx.beginPath();
        ctx.ellipse(230, 460, 15, 25, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#6ECFF6'; 
        ctx.fill();
        ctx.stroke();

        // 다리 (오른쪽)
        ctx.beginPath();
        ctx.ellipse(270, 460, 15, 25, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#6ECFF6'; 
        ctx.fill();
        ctx.stroke();

       
    }
    document.getElementById('save').onclick = function() {
        var dataURL = canvas.toDataURL();
        localStorage.setItem('bonobonoImage', dataURL);
    };

    
    document.getElementById('clear').onclick = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    
    document.getElementById('Load').onclick = function() {
        var dataURL = localStorage.getItem('bonobonoImage');
        if (dataURL) {
            var img = new Image();
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            };
            img.src = dataURL;
        }
    };

    
    
    drawbonobono()
};

	  