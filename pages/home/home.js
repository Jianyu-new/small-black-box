// pages/home/home.js
Page({
  data: {
    username: '',
    password: ''
  },
  bindInput: function(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({
      [key]: e.detail.value
    });
  },
  onSubmit: function(e) {
    const { username, password } = this.data;
    
    console.log('用户名：', username);
    console.log('密码：', password);
    // 模拟登录成功
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000
    });
  }
});
