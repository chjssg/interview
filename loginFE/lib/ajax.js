const url = '127.0.0.1:3000'
function ajax(method, url, param, callback) {
    var xhr = new XMLHttpRequest()
    if (method === 'post') {
        xhr.open(method, url)
        xhr.send(param);
    } else if (method === 'get') {
        xhr.open(method, `${url}?${param}`)
        xhr.send()
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (callback) {
                    callback(xhr.responseText)
                }
            }
        }
    }
}