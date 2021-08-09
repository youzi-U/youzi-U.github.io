class CanvasDraw {
    constructor() {
        this.xxx = 01;

        this.init()
    }
    init() {
        const _this = this;
        this.ctx = $('#canvas')[0].getContext('2d');
        $('#canvas')[0].addEventListener('mousemove', function (e) {
            _this.offsetX = e.offsetX;
            _this.offsetY = e.offsetY;
        })
        this.createImg();
    }
    createImg() {
        this.img = document.createElement('img');
        this.img.onload = () => {
            this.ctx.drawImage(this.img, 100, 100, 200, 300);
            this.getImageData();
        }
        this.img.src = './logo.png';
    }
    getImageData() {
        this.imageData = this.ctx.getImageData(0, 0, 500, 500);
        this.ctx.clearRect(0, 0, 500, 500);
        this.setImageRect()
    }
    setImageRect() {
        this.ctx.clearRect(0, 0, 500, 500);
        const gap = 2;
        for (var h = 0; h < this.imageData.height; h += gap) {
            for (var w = 0; w < this.imageData.width; w += gap) {
                // const xPos = Math.abs(w - this.offsetX);
                // const yPos = Math.abs(h - this.offsetY);
                // const pos = Math.sqrt(Math.pow(xPos, 2) + Math.pow(yPos, 2))
                var position = (this.imageData.width * h + w) * 4;
                var r = this.imageData.data[position],
                    g = this.imageData.data[position + 1],
                    b = this.imageData.data[position + 2];
                var _h = h;
                var _w = w;
                // if (pos < 30 && w < this.offsetX && h < this.offsetY) {
                //     _w -= 20
                //     _h -= 20
                // }
                // if (pos < 30 && w > this.offsetX && h > this.offsetY) {
                //     _w -= 20
                //     _h -= 20
                // }
                // if (pos < 30 && w < this.offsetX && h > this.offsetY) {
                //     _w -= 20
                //     _h += 20
                // }
                // if (pos < 30 && w > this.offsetX && h < this.offsetY) {
                //     _w += 20
                //     _h -= 20
                // }
                if (r + g + b === 255 + 224 + 25) {
                    this.ctx.drawImage(this.img, _w, _h, 4, 4);
                } else if (r + g + b === 255 + 77 + 136) {
                    this.ctx.drawImage(this.img, _w, _h, 4, 4);
                }
            }
        }
        window.requestAnimationFrame(() => this.setImageRect())
    }
}

new CanvasDraw()