function wrapDate (){
    let _date = Date;
    Date = function () {
        if (arguments.length > 0 && typeof (arguments[0]) === 'string' && arguments[0].includes('-')) {
            arguments[0] = arguments[0].replace(/-/g, '/')
        }
        return new _date(...arguments);
    }
    Date.prototype = _date.prototype
    // 继承静态函数，过滤已有的静态函数和参数，取数组差集
    const _dateStaticParam = Object.getOwnPropertyNames(_date)
    const dateStaticParam = Object.getOwnPropertyNames(Date)
    const diffParam = []
    for (let i = 0; i < _dateStaticParam.length; i++) {
        let find = false
        for (let j = 0; j < dateStaticParam.length; j++) {
            if (_dateStaticParam[i] === dateStaticParam[j]) {
                find = true
                break
            }
        }
        if (!find) {
            diffParam.push(_dateStaticParam[i])
        }
    }
    for (let i = 0; i < diffParam.length; i++) {
        Date[diffParam[i]] = _date[diffParam[i]]
    }
}

if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
    wrapDate()
}