# MY.FOZHU.h5
项目的技术栈是：
nodejs
javascript
react
redux
react-router 4
webpack
这个项目是一个移动项目的集合包含了 mobile 和 pc, 根据用户的权限的不同来显示不同的菜单。
每一个模块，或者组件，都有独立的数据状态管理。每一个页面都是由n个独立的组件构成，而组件也
应该尽量避免很强的耦合性,减少出现，牵一发而动全身的情况，利于项目以后的维护和扩张或二次开发。
##### 视图页面
flexible(淘宝适配方案)
scss/flexbox
postcss
postcss.config.js 配置过滤其他文件
```javascript
    module.exports = {
       plugins: [
           require('postcss-px2rem-exclude')({
             baseDpr: 2,
             threeVersion: false,
             remVersion: true,
             remUnit: 75,
             remPrecision: 6,
             forcePxComment:'!px',
             keepComment:'!no',
             exclude: /(node_modules)|(static)/g
           }),
           require('postcss-cssnext')
       ]
    }
```
##### 状态管理
action --> reducer --> store --> store
1.store 会把整个应用的state，传递给顶层容器组件
2.容器组件和3个部分进行交互：
    1.内部的展示组件：容器把状态分发给各个组件。
    2.action: 容器会获取到action。
    3.reducer: 容器可以调用 dispatch(action)，以回调的形式给下面的子组件，就把 action 传给 reducer。
3.reducer 得到容器组件传来的 action 之后，根据 action.type 这个参数执行不同操作，他还会接收到 store 里面的原 state，然后把原 state 和 action 对象里面的其它参数进行操作，然后 return 一个新的对象

##### 中间件
```javascript
import axios from 'axios';

export default store => next => action => {
    const {dispatch, getState} = store;
    /*如果dispatch来的是一个function，此处不做处理，直接进入下一级*/
    if (typeof action === 'function') {
        action(dispatch, getState);
		return;
    }
    /*解析action*/
    const {
        promise,
        types,
        afterSuccess,
        ...rest
    } = action;

    /*没有promise，证明不是想要发送ajax请求的，就直接进入下一步啦！*/
    if (!action.promise) {
        return next(action);
    }

    /*解析types*/
    const [REQUEST,
        SUCCESS,
        FAILURE] = types;

    /*开始请求的时候，发一个action*/
    next({
        ...rest,
        type: REQUEST
    });
    /*定义请求成功时的方法*/
    const onFulfilled = result => {
        next({
            ...rest,
            result,
            type: SUCCESS
        });
        if (afterSuccess) {
            afterSuccess(dispatch, getState, result);
        }
    };
    /*定义请求失败时的方法*/
    const onRejected = error => {
        next({
            ...rest,
            error,
            type: FAILURE
        });
    };

    return promise(axios).then(onFulfilled, onRejected).catch(error => {
        console.error('MIDDLEWARE ERROR:', error);
        onRejected(error)
    })
}
```





