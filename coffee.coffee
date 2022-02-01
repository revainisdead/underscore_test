console.log "Testing Coffeescript Compilation"

obj = {}
test = (x) -> x.one = 1

test(obj)
console.log obj
