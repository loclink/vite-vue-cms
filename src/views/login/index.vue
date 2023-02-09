<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import { useRouter } from 'vue-router';

const loginData = ref({
  username: 'admin',
  password: 'admin'
});
const router = useRouter();

const handleClickLoginBtn = () => {
  console.log(loginData.value);
  loginData.value.password &&
    loginData.value.username &&
    ElMessage({
      message: '登录成功',
      type: 'success'
    });
  setTimeout(() => {
    router.replace('/dashboard');
  }, 1000);
};
</script>

<script lang="ts">
export default { name: 'login' };
</script>

<template>
  <div class="login-container">
    <ElForm class="login-form" :model="loginData">
      <p class="title">系统登录</p>
      <ElFormItem>
        <ElInput v-model="loginData.username" placeholder="账号" type="text"></ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElInput v-model="loginData.password" placeholder="密码" type="password" show-password></ElInput>
      </ElFormItem>
      <ElButton class="login-btn" type="primary" @click="handleClickLoginBtn">登录</ElButton>
    </ElForm>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  :deep(.el-input__wrapper) {
    background-color: rgba(0, 0, 0, 0.1);
    height: 50px;
    .el-input__inner {
      color: #ccc;
    }
  }
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  display: flex;
  justify-content: center;
  .title {
    font-size: 2vw;
    font-weight: 600;
    color: #fff;
  }
  .login-form {
    width: 30vw;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    transform: translateY(40%);
    position: absolute;

    .login-btn {
      width: 100%;
    }
  }
}
</style>
