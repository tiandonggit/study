<template>
  <el-dialog
    :modal="false"
    :visible.sync="isShow"
    :show-close="false"
    :before-close="beforeClose"
    top="75px"
    :class="{isLeft: position === 'left', isRight: position === 'right'}"
  >
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    position: {
      type: String,
      default: "middle"
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    beforeClose() {
      this.$parent.beforeClose();
    }
  }
};
</script>

<style scoped lang="less">
/deep/ .el-dialog {
  // height: 789px;
  background: url("../assets/img/dialog_border.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 65%;
  height: 86%;
  margin-bottom: 0;

  .el-dialog__header {
    padding: 0;
  }

  .el-dialog__body {
    padding: 30px 40px;
    height: 100%;

    .slot {
      height: 100%;
    }
  }
}
.isLeft /deep/ .el-dialog {
  margin-left: 2%;
}

.isRight /deep/ .el-dialog {
  margin-left: 32.7%;
}
</style>
