var Tool = {
  megerObj: {
    /**
     * 深拷贝对象
     * @param target 目标对象
     * @param source 源对象
     * @param deep 是否复制(继承) 对象中的对象
     * @returns {*|{}} 返回继承了source对象属性的新对象
     */
    extend: function(target, source, deep) {
      target = target || {};
      var sType = typeof source, i = 1, options;
      if( sType === 'undefined' || sType === 'boolean' ) {
        deep = sType === 'boolean' ? source : false;
        source = target;
        target = this;
      }
      if( typeof source !== 'object' && Object.prototype.toString.call(source) !== '[object Function]' )
        source = {};
      while(i <= 2) {
        options = i === 1 ? target : source;
        if( options != null ) {
          for( var name in options ) {
            var src = target[name], copy = options[name];
            if(target === copy)
              continue;
            if(deep && copy && typeof copy === 'object' && !copy.nodeType)
              target[name] = this.extend(src ||
                (copy.length != null ? [] : {}), copy, deep);
            else if(copy !== undefined)
              target[name] = copy;
          }
        }
        i++;
      }
      return target;
    }
  }
}
module.exports = Tool