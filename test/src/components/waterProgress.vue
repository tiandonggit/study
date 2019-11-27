<template>
  <div class="waterProgress">
    <canvas class="c">当前浏览器不支持canvas 请升级！</canvas>
    <input
      type="hidden"
      v-model="value"
      name="range"
      min="0"
      max="100"
      step="1"
    />
  </div>
</template>

<script>
export default {
  name: "waterProgress",
  props: {
    value: {
      type: Number,
      default: function() {
        return 1;
      }
    },
    color: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      canvas: "",
      ctx: "",
      oRange: "",
      M: "",
      Sin: "",
      Cos: "",
      Sqrt: "",
      Pow: "",
      PI: "",
      Round: "",
      oW: 0,
      oH: 0,
      lineWidth: 0,
      r: 0,
      cR: 0,
      axisLength: 0,
      unit: 0,
      range: 0,
      nowrange: 0,
      xoffset: 0,
      data: 0,
      sp: 0,
      nowdata: 0,
      waveupsp: 0,
      arcStack: [],
      bR: 0,
      soffset: 0,
      circleLock: true,
      cStartPoint: 0
    };
  },
  mounted() {
    this.canvas = document.getElementsByClassName("c")[0];
    this.ctx = this.canvas.getContext("2d");
    this.oRange = document.getElementsByName("range")[0];
    this.M = Math;
    this.Sin = this.M.sin;
    this.Cos = this.M.cos;
    this.Sqrt = this.M.sqrt;
    this.Pow = this.M.pow;
    this.PI = this.M.PI;
    this.Round = this.M.round;
    this.oW = this.canvas.width = 250;
    this.oH = this.canvas.height = 250;
    this.lineWidth = 2; // 线宽
    this.r = this.oW / 2; // 大半径
    this.cR = this.r - 10 * this.lineWidth;
    this.ctx.beginPath();
    this.ctx.lineWidth = this.lineWidth;

    // 水波动画初始参数
    this.axisLength = 2 * this.r - 16 * this.lineWidth; // Sin 图形长度
    this.unit = this.axisLength / 9; // 波浪宽
    this.range = 0.4; // 浪幅
    this.nowrange = this.range;
    this.xoffset = 8 * this.lineWidth; // x 轴偏移量
    this.data = ~~this.oRange.value / 100; // 数据量
    this.sp = 0; // 周期偏移量
    this.nowdata = 0;
    this.waveupsp = 0.006; // 水波上涨速度

    // 圆动画初始参数
    this.arcStack = []; // 圆栈
    this.bR = this.r - 8 * this.lineWidth;
    this.soffset = -(this.PI / 2); // 圆动画起始位置
    this.circleLock = true; // 起始动画锁

    // 获取圆动画轨迹点集
    for (
      var i = this.soffset;
      i < this.soffset + 2 * this.PI;
      i += 1 / (8 * this.PI)
    ) {
      this.arcStack.push([
        this.r + this.bR * this.Cos(i),
        this.r + this.bR * this.Sin(i)
      ]);
    }
    // 圆起始点
    this.cStartPoint = this.arcStack.shift();
    this.ctx.strokeStyle = "#1c86d1";
    this.ctx.moveTo(this.cStartPoint[0], this.cStartPoint[1]);
    // 开始渲染
    this.render();
  },
  methods: {
    drawSine() {
      this.ctx.beginPath();
      this.ctx.save();
      var Stack = []; // 记录起始点和终点坐标
      for (
        var i = this.xoffset;
        i <= this.xoffset + this.axisLength;
        i += 20 / this.axisLength
      ) {
        var x = this.sp + (this.xoffset + i) / this.unit;
        var y = this.Sin(x) * this.nowrange;
        var dx = i;
        var dy =
          2 * this.cR * (1 - this.nowdata) +
          (this.r - this.cR) -
          this.unit * y;
        this.ctx.lineTo(dx, dy);
        Stack.push([dx, dy]);
      }
      // 获取初始点和结束点
      var startP = Stack[0];
      var endP = Stack[Stack.length - 1];
      this.ctx.lineTo(this.xoffset + this.axisLength, this.oW);
      this.ctx.lineTo(this.xoffset, this.oW);
      this.ctx.lineTo(startP[0], startP[1]);
      this.ctx.fillStyle = "#ffd2bc";
      this.ctx.fill();
      this.ctx.restore();
    },

    drawText() {
      this.ctx.globalCompositeOperation = "source-over";
      var size = 0.4 * this.cR;
      this.ctx.font = "bold " + size + "px Microsoft Yahei";
      let txt = (this.nowdata.toFixed(2) * 100).toFixed(0) + "%";
      var fonty = this.r + size / 2;
      var fontx = this.r - size * 0.8;
      this.ctx.fillStyle = "#fff";
      this.ctx.textAlign = "center";
      this.ctx.fillText(txt, this.r + 5, this.r + 20);
    },
    //最外面淡黄色圈
    drawCircle() {
      this.ctx.beginPath();
      // this.ctx.lineWidth = 15;
      this.ctx.fillStyle = "#fff89d";
      this.ctx.arc(this.r, this.r, this.cR + 15, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.restore();
    },
    //灰色圆圈
    grayCircle() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 10;
      this.ctx.strokeStyle = "#fbdb32";
      this.ctx.arc(this.r, this.r, this.cR - 5, 0, 2 * Math.PI);
      this.ctx.stroke();
      this.ctx.restore();
      this.ctx.beginPath();
    },
    //橘黄色进度圈
    orangeCircle() {
      this.ctx.beginPath();
      this.ctx.strokeStyle = "#fbdb32";
      //使用这个使圆环两端是圆弧形状
      this.ctx.lineCap = "round";
      this.ctx.arc(
        this.r,
        this.r,
        this.cR - 5,
        0 * (Math.PI / 180.0) - Math.PI / 2,
        this.nowdata * 360 * (Math.PI / 180.0) - Math.PI / 2
      );
      this.ctx.stroke();
      this.ctx.save();
    },
    //裁剪中间水圈
    clipCircle() {
      this.ctx.beginPath();
      this.ctx.arc(this.r, this.r, this.cR - 10, 0, 2 * Math.PI, false);
      this.ctx.clip();
    },
    //渲染canvas
    render() {
      this.ctx.clearRect(0, 0, this.oW, this.oH);
      //最外面淡黄色圈
      this.drawCircle();
      //灰色圆圈
      this.grayCircle();
      //橘黄色进度圈
      // this.orangeCircle();
      //裁剪中间水圈
      this.clipCircle();
      // 控制波幅
      this.oRange.addEventListener(
        "change",
        function() {
          this.data = ~~this.oRange.value / 100;
        },
        0
      );
      if (this.data >= 0.85) {
        if (this.nowrange > this.range / 4) {
          var t = this.range * 0.01;
          this.nowrange -= t;
        }
      } else if (this.data <= 0.1) {
        if (this.nowrange < this.range * 1.5) {
          var t = this.range * 0.01;
          this.nowrange += t;
        }
      } else {
        if (this.nowrange <= this.range) {
          var t = this.range * 0.01;
          this.nowrange += t;
        }
        if (this.nowrange >= this.range) {
          var t = this.range * 0.01;
          this.nowrange -= t;
        }
      }
      if (this.data - this.nowdata > 0) {
        this.nowdata += this.waveupsp;
      }
      if (this.data - this.nowdata < 0) {
        this.nowdata -= this.waveupsp;
      }
      this.sp += 0.07;
      // 开始水波动画
      this.drawSine();
      // 写字
      this.drawText();
      requestAnimationFrame(this.render);
    }
  }
};
</script>

<style lang="less" scoped></style>
