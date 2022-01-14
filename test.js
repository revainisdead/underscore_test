//var obj = require("../notes/cable/tickets/1694_reassign_reel")
var fs = require("fs")
var diff = require("deep-object-diff").diff;

var obj = JSON.parse(fs.readFileSync("../data_testing/1694_reassign_reel.data", "utf8"))

var test1 = JSON.parse(fs.readFileSync("../data_testing/1703_test.data", "utf8"))
var local1 = JSON.parse(fs.readFileSync("../data_testing/1703_local.data", "utf8"))


_ = require("underscore")
const {
    performance
} = require("perf_hooks");

var lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];

test = _.chain(lyrics)
  .map((line) => line.words.split(' '))
  .flatten()
  .reduce(function(counts, word) {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {})
  .value();

console.log(test);


let t1 = _.chain(lyrics)
console.log("TEST1", t1)
let t2 = t1.map((line) => { return line.words.split(" ") });
console.log("TEST2", t2)
let t3 = t2.flatten()
console.log("TEST3", t3)
let t4 = t3.reduce((sum, word) => {
    sum[word] = (sum[word] || 0) + 1;
    return sum;
}, {})
console.log("TEST4", t4)
let t5 = t4.value()
console.log("TEST5", t5)



// Chain filter, etc, in vanilla js?
nums = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25]

let f1 = (item) => item < 30;
let f2 = (item) => item < 20;
let f3 = (item) => item < 10;

let time1 = performance.now()
// Yes, but slow
let filtered = nums
                .filter(f1)
                .filter(f2)
                .filter(f3)
let time2 = performance.now()
console.log(`vanilla took ${time2 - time1} ms`);
console.log(`filtered: ${filtered}`)


let time3 = performance.now()
let filtered2 = _.chain(nums)
                 .filter(f1)
                 .filter(f2)
                 .filter(f3)
let time4 = performance.now()
console.log(`underscore took ${time4 - time3} ms`);
console.log(`filtered: ${filtered2}`);


let nested = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
];
nest_flat = _.chain(nested)
             .flatten()
             .value()
console.log("flattened:", nest_flat);

// https://firstdoit.com/chain-your-solutions-with-underscore-513fba67ec1f
let students = [
    { name: "John", grades: [7.0, 6.9, 8.0], teacher: "A" },
    { name: "Paul", grades: [5.0, 8.7, 3.7], teacher: "A" },
    { name: "Luke", grades: [9.0, 8.2, 6.2], teacher: "B" },
    { name: "Mark", grades: [6.0, 9.0, 8.4], teacher: "B" },
];
let sum = (nums) => {
    return _.reduce(nums, (sum, n) => {
        return sum + n;
    }, 0)
};
let avg = (nums) => {
    return sum(nums) / nums.length;
};
let isApproved = (student) => {
    return avg(student.grades) >= 7;
};

let approvedStudents = _.filter(students, isApproved)

let names_white_list = ["John", "Paul"];
let reduce_arr_build = students.reduce((total, item) => {
    console.log('item', item);
    console.log('total per iter:', total);
    if (names_white_list.includes(item.name)) {
        total.push(item.name);
    }

    return total;
}, []);
console.log("reduce_arr_build:", reduce_arr_build)


// Create my own reduce method
let customReduce = (array, reducer, initialValue=0) => {
    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        accumulator = reducer(accumulator, currentItem);
    }

    return accumulator;
};

// Same code, with custom reduce.
let reduce_arr_build2 = customReduce(students, (total, item) => {
    console.log('item', item);
    console.log('total per iter:', total);
    if (names_white_list.includes(item.name)) {
        total.push(item.name);
    }
    return total;

    // Don't do this, it recreates the array on every iteration,
    // defeating the point of using an accumulator.
    //return [...total, item.name]
}, []);
console.log("reduce_arr_build2:", reduce_arr_build2)

// Test filter shorthand
let data = [
    [
        {"original_serial_number": "111", "other": "test1"},
        {"original_serial_number": "111", "other": "test1"},
    ],
    [
        {"original_serial_number": "222", "other": "test2"},
        {"original_serial_number": "222", "other": "test2"},
    ],
    [
        {"original_serial_number": "333", "other": "test3"},
        {"original_serial_number": "333", "other": "test3"},
    ],
];
let results = _.chain(data)
    .flatten()
    .filter({ original_serial_number: "111" })
    .value()
console.log(results)

let results2 = _.chain(obj.reels)
    .map((reel) => reel.segments)
    .flatten()
    .filter({ container_type: "shipping" })
    .value()

console.log(results2)

// splice test
let a = [1, 2, 3, 4]
console.log("original a", a)
//       index
//       |  deleteCount
//       |  |  item1, item2, itemN
//       |  |  |
a.splice(2, 0, ...[7, 8])
console.log("new a", a)


// why use not not (!!)
// Way to express truthiness in js?

let testA = !!{} // true (wish it would have resulted in false)
let testB = !!{1: 3} // true (has data) as expected
let isFalse = !!false // false as expected
let isTrue = !!true // true as expected


// random number between 0 and max index (a.length -1)
function getRandomIndex(a) {
    return Math.floor(Math.random() * a.length);
}
for (let i = 0; i < 100; i++) {
    getRandomIndex(a);
}

// Shows returns mostly compared to the right hand side object
//console.log(diff(test1, local1));


let pluckData = [
    {
        "serial_number": 1234,
        "original_serial_number": 1234,
        "original_reel_number": 1234,
        "original_reel": 1234,
    },
    {
        "serial_number": 1234,
        "original_serial_number": 1234,
        "original_reel_number": 1234,
        "original_reel": 1234,
    },
    {
        "serial_number": 1234,
        "original_serial_number": 1234,
        "original_reel_number": 1234,
        "original_reel": 1234,
    },
]
console.log(
    "Pluck Test",
    _.pluck(pluckData, "original_reel"),
)

// Merge two objects in coffeescript without spread
let obj1 = {"test1": 1, "test2": 2, "test3": 3}
let obj2 = {"a": "a", "b": "b"}
let merged = Object.assign(obj1, obj2)

let obj_pick = {
    "test1": "value",
    "test2": "value",
    "test3": "value",
    "test4": "value",
    "test5": "value",
    "abc": "valueA",
    "ABC": "valueB",
    "abcabc": "valueC",
}
fields = ["test1", "test2", "test3"]
pick_test = _.pick(obj_pick, fields)
console.log(pick_test)

console.log("Underscore object test", _.object(["job", "details", "received", "plan"], [true, true, true, true]))


// Mocks
test1 = {
    and: {
        returnValue: (data) => { console.log(data) }
    },
    not: {
        toHaveBeenCalledWith: (cb) => cb(),
    },
}

test1.and.returnValue({
    "addSegment": () => {},
})
test1.not.toHaveBeenCalledWith(() => console.log("Callback"))


let reels = [{
    container_type: "receiving",
    reel_number: "1111",
}]

let newReel = {
    container_type: "receiving_reassign_reel",
    reel_number: "1111",
}

any = _.some(reels, {
    container_type: newReel.container_type,
    reel_number: newReel.reel_number,
})
console.log("Reel already exists: ", any)

// Loop over object with underscore's mapObject (map but for objects)
let objectLoopTest = {
    "test1": 1,
    "test2": 2,
};
//let correctObjMap = (fn, key, val) => {
//    return fn(val, key)
//}
_.mapObject(objectLoopTest, (val, key) => {
    console.log(key, val);
})
