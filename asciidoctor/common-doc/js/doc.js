var endIndex = document.body.innerHTML.indexOf("<!-- docend -->")
var docstr = document.body.innerHTML.substring(0, endIndex)
var asciidoctor = Asciidoctor()
var defaultAttrs = {'standalone':'true', 'attributes': {'icons': 'font','iconfont-cdn':'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.css', 'iconfont-name':'font-awesome', 'iconfont-remote':'true','stylesheet':stylesheet}}
var html = asciidoctor.convert(docstr, defaultAttrs)
my_html = document.createElement('html')
my_html.innerHTML = html
document.body.innerHTML = ""
document.write(html)
// console.log(html)
