function User(uid) {
  var binder = new DataBinder(uid),

    user = {
      attriures: {},

      //属性设置器使用数据绑定器PubSub来发布变化   

      set: function (attr_name, val) {
        this.attriures[attr_name] = val;
        binder.trigger(uid + ":change", [attr_name, val, this]);
      },

      get: function (attr_name) {
        return this.attributes[attr_name];
      },

      _binder: binder
    };

  binder.on(uid + ":change", function (vet, attr_name, new_val, initiator) {
    if (initiator !== user) {
      user.set(attr_name, new_val);
    }
  })

  return user;
}
