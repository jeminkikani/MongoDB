db.clientmaster.find({ $or: [{ city: { $eq: "Manglore" } }, { baldue: { $gt: "0" } }] })

db.clientmaster.find({ $or: [{ city: { $eq: "Manglore" } }, { baldue: { $gt: "0" } }] }).count()

db.clientmaster.find({ $nor: [{ city: { $eq: "Manglore" } }, { baldue: { $gt: "0" } }] }).count()

db.clientmaster.find().count()

db.clientmaster.find().limit(1)
db.clientmaster.find().skip(1).limit(2)
db.clientmaster.find().sort({ clientname: 1 })
db.clientmaster.find().sort({ clientname: -1 })


db.clientmaster.insert({
    clientno: 'C00007', clientname: 'Rajesh Mishra', city: 'Surat', pincode: '395010',
    state: 'Gujarat', baldue: '100', hobbie: "reading"
})

db.clientmaster.find({ hobbie: { $exists: true } })


// ------
db.courses.insertOne({ _id: 1, name: "java", tags: ["language", "programming", "easy", "ocean"] })
db.courses.insertOne({ _id: 2, name: "python", tags: ["language", "programming", "easy"] })
db.courses.insertOne({ _id: 3, name: "C", tags: ["language", "performance"] })
db.courses.insertOne({ _id: 4, name: "Oracle", tags: ["database", "sql", "cloud"] })
db.courses.insertOne({ _id: 5, name: "MongoDB", tags: ["database", "nosql", "cloud"] })
db.courses.insertOne({ _id: 6, name: "Devops", tags: ["culture"] })

// Syntax:
// -------
//  $all operator to select documents where array contains all specified elements.
// { field: { $all: [value1, value2, value3,...]}}
// We can write equaivalent query by using $and operator also.
// { $and: [{field: value1},{field: value2},{field: value3},...]}

db.courses.find({ $and: [{ tags: "database" }, { tags: "cloud" }] })
db.courses.find({ tags: { $all: ["database", "cloud"] } })
db.courses.find({ tags: { $all: ["language", "programming"] } })


// $elemMatch operator to select documents where atleast one element of the array matches the 
// specified query criteria.
// Syntax:
// { field: { $elemMatch: { <query1>,<query2>,<query3>,...}}}

db.createCollection('students')
db.students.insertOne({ _id: 1, name: "Duresh", year: 1, marks: [70, 87, 90] })
db.students.insertOne({ _id: 2, name: "Ravina", year: 1, marks: [90, 88, 92] })
db.students.insertOne({ _id: 3, name: "Shiva", year: 1, marks: [85, 100, 90] })
db.students.insertOne({ _id: 4, name: "Durgesh", year: 2, marks: [79, 85, 80] })
db.students.insertOne({ _id: 5, name: "Ravi", year: 2, marks: [88, 88, 92] })
db.students.insertOne({ _id: 6, name: "Shvansh", year: 2, marks: [95, 90, 96] })

db.students.find({ marks: { $gte: 85 } }, { _id: 0, marks: 1 })
db.students.find({ marks: { $gte: 85 } }, { _id: 0, name: 1, "marks.$": 1 })
db.students.find({ marks: { $all: [88, 90] } }, { _id: 0, name: 1, "marks.$": 1 })


//      Note: If there is no query condition or if query condition won't include array then we 
// cannot use $ operator, otherwise we will get error.

//  We can use $elemMatch to project first element in the array that
// matches specified $elemMatch condition.
db.students.find({ year: 1 }, { _id: 0, name: 1, year: 1, marks: { $elemMatch: { $gt: 85 } } })


// $slice operator:
// -------------------
// By using $slice operator we can select required number of elements in
// the array.
// Syntax-1:
// ---------
// db.collection.find({query},{<array>:{$slice: n}})

db.students.find({}, { _id: 0, name: 1, year: 1, marks: { $slice: 2 } })
db.students.find({}, { _id: 0, name: 1, year: 1, marks: { $slice: -2 } })

// db.collection.find({query},{<array>:{$slice: [n1,n2]}})
// skip n1 number of elements and then select n2 number of elements.

db.students.find({ year: 1 }, { _id: 0, name: 1, marks: { $slice: [1, 2] } })
db.students.find({ year: 1 }, { _id: 0, name: 1, marks: { $slice: [2, 10] } })

