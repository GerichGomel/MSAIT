let testStr='https://www.learn.javascript.ru/regexp-anchors/a?product_id=23&ct_id1=2&ct_id=3'

function get_domain_name(str)
    { 
        let [, protocol, hostname, path, obj] = str.match(/(.*):\/\/?(.[^/]+)(.*)\?(.[^?]+)/)
        return {
          protocol, 
          hostname,
          path,
          params: obj
            .split('&')
            .map(e => {
              return e.split('=')
            })
            .reduce((accum, [key, value]) => {
              accum[key] = value
              return accum
            },{})
        }
    }
console.log(get_domain_name(testStr))