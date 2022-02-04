_ = require("underscore")

console.log "Testing Coffeescript Compilation"

# 1) Modifying objects from function calls.
obj = {}
test = (x) -> x.one = 1

test(obj)
console.log obj
# >>> { one: 1 }

obj2 = {}
test = (x) ->
    x_cpy = Object.assign(x, {})
    x_cpy.one = 1

test(obj2)
console.log obj2
# >>> {}

# 2) Set nested object in one line
obj3 = {
    test: {}
    attr1: 1
    attr2: 2
}

inner = {
    one: 1,
    two: 2,
}

obj3.test = inner
console.log(obj3)



group = [
    {
        has_splices: true,
    },
    {
        has_splices: false,
    },
]
test = _.pluck(group, "has_splices")
console.log test

