// pages/home/home.js
Page({
  data: {
    username: '',
    password: ''
  },

  // //用户名输入处理
  // bindUserNameInput: function(e) {
  //   console.log('bindUserNameInput');
  //   const key = e.currentTarget.dataset.key;
  //   this.setData({
  //     username: e.detail.value
  //   });
  // },

  // //密码输入处理
  // bindPasswordInput: function(e) {
  //   console.log('bindPasswordInput');
  //   const key = e.currentTarget.dataset.key;
  //   this.setData({
  //     password: e.detail.value
  //   });
  // },


  onSubmit: function(e) {
    const { username, password } = this.data;
    
    console.log('用户名：', username);
    console.log('密码：', password);

    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000
    });

    wx.navigateTo({
      url:  "/pages/index/index"
    });

  }
});
