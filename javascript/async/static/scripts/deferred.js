// 创建一个 Deferred 对象
let deferred = $.Deferred();

// 模拟异步操作（如 AJAX）
setTimeout(() => {
  if (Math.random() > 0.5) {
    deferred.resolve("成功！"); // 触发 .done()
  } else {
    deferred.reject("失败！");  // 触发 .fail()
  }
}, 1000);

deferred.then(
  (data) => {
    console.log("success: " + data);
  }
).catch((err) => {
  console.log("failed: " + err);
})

// 绑定回调
deferred
  .done(result => console.log("成功:", result))
  .fail(error => console.log("失败:", error));


