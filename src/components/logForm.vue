<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel"  placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorTexts }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorTexts}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login()">登录</a>
        </div>
        <span>{{ errorText }}</span>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        usernameModel:'',
        passwordModel:'',
        errorText:''
      }
    },
    computed:{
      userErrors(){
        let status,errorTexts
        if(!/@/g.test(this.usernameModel)){
          status=true,
          errorTexts=''
        }else{
          status=false,
          errorTexts='不能包含@'
        }
        if(! this.usersflag){
          errorTexts='',
          this.usersflag=true

        }
        return{
          status,errorTexts
        }

      },
      passwordErrors(){
        let status,errorTexts
        if(/^\w{1,6}$/g.test(this.passwordModel)){
          status=true,
          errorTexts=''
        }else{
          status=false,
          errorTexts='密码必须是1-6位'
        }
        if(! this.passwordflag){
          errorTexts='',
          this.passwordflag=true
        }

        return{
          status,errorTexts
        }

      }
    },
    methods:{
      login(){
        if(!this.userErrors.status || !this.passwordErrors.status){
          this.errorText='输入的登陆信息有误'
        }else{
          this.$http.get('api/login').then((res) => {
            this.$emit('haslog',res.data)
          },(error) => {

          })
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-form-error{ color:red;}
</style>
