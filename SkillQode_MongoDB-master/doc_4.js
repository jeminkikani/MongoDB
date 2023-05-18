// U--->Update Operation:
// ----------------------
// students collection
// Based on our requirement, we can perform update operations to reflect latest information.

// eg-1: update student document with changed mobile number
// eg-2: Increment all employee salaries by 1000 if salary is less than 10000 We can perform updations like

// 1. Overwrite existing value of a particular field with our new value
// 2. Add a new field for selected documents
// 3. Remove an existing field
// 4. Rename an existing field

// How to perform updations:
// -------------------------
// We can perform required updations by using update methods and
// update operators.
// update methods:
// ---------------
// There are 3 update methods are avaialble.
// 1. updateOne()
// 2. updateMany()
// 3. update()
// 122
// 1. updateOne():
// ---------------
// db.collection.updateOne(filter, update, options)
// It finds the first document that matches filter criteria and perform required updation.
// It will perform updation for a single document.

// 2. updateMany():
// ---------------
//     db.collection.updateMany(filter, update, options) To update all documents that match the
// specified filter criteria.

// 3. update():
// -----------
//     db.collection.update(filter, update, options)
// We can use this method to update either a single document or multiple
// documents.
// Bydefault this method updates a single document only.
// If we include multi: true to update all documents that match query
// criteria.
//     db.collection.update(filter, update)-- -> To update a single document
// db.collection.update(filter, update, { multi: true })-- -> To update all
// matched documents

// Case Study:
// -----------
db.createCollection("employees")
db.employees.insert({ _id: 1, eno: 100, ename: "Sunny", esal: 1000, eaddr: "Mumbai" })
db.employees.insert({ _id: 2, eno: 200, ename: "Bunny", esal: 2000, eaddr: "Hyderabad" })
db.employees.insert({ _id: 3, eno: 300, ename: "Chinny", esal: 3000, eaddr: "Mumbai" })
db.employees.insert({ _id: 4, eno: 400, ename: "Vinny", esal: 4000, eaddr: "Delhi" })
db.employees.insert({ _id: 5, eno: 500, ename: "Pinny", esal: 5000, eaddr: "Chennai" })
db.employees.insert({ _id: 6, eno: 600, ename: "Tinny", esal: 6000, eaddr: "Mumbai" })
db.employees.insert({ _id: 7, eno: 700, ename: "Zinny", esal: 7000, eaddr: "Delhi" })

// Note: To perform updations we have to use update operators like $set,$unset, $inc etc
// $set-- -> To set new value to the specified field

// Update salary of Sunny with 9999 ?
db.employees.updateOne({ ename: "Sunny" }, { $set: { esal: 9999 } })
db.employees.find({ ename: "Sunny" })

// Update all Mumbai based employees salary as 7777?
db.employees.updateOne({ eaddr: "Mumbai" }, { $set: { esal: 7777 } })


// Note: updateOne() will always consider only first matched document.
// If updation is not available then only it will perform updation.
db.employees.updateOne({ eaddr: "Mumbai" }, { $set: { esal: 7777 } })

db.employees.updateMany({ eaddr: "Mumbai" }, { $set: { esal: 7777 } })
// It will update all matched documents
db.employees.find({ eaddr: "Mumbai" })
db.employees.updateMany({ eaddr: "Mumbai" }, { $set: { esal: 7777 } })
// pdate all Delhi based Employees salary as 5555?
db.employees.update({ eaddr: "Delhi" }, { $set: { esal: 5555 } })
// It will perform updation for only first matched document.It is exactly
// same as updateOne() method.

db.employees.find({ eaddr: "Delhi" })
db.employees.update({ eaddr: "Delhi" }, { $set: { esal: 5555 } })
db.employees.find({ eaddr: "Delhi" })

db.employees.update({ eaddr: "Delhi" }, { $set: { esal: 5555 } }, { multi: true })
// It will perform updation for all matched documents.
db.employees.find({ eaddr: "Delhi" })
db.employees.update({ eaddr: "Delhi" }, { $set: { esal: 5555 } }, { multi: true })

db.employees.update({ eaddr: "Delhi" }, { $set: { esal: 4444 } }, { multi: true })

