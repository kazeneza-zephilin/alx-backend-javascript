interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1  = {
    firstName : 'John',
    lastName : 'Doe',
    age : 21,
    location : 'accra'
}
const student2  = {
    firstName : 'Ubi',
    lastName : 'ane',
    age : 21,
    location : 'kigali'
}
const studentsList: Array<Student> = [student1, student2]

/**
 * using vanilla Js
 * each element in the array append new row to the table
 * each row should contain first name and location
 */

export function renderTable(studentsList: Array<Student>): void{
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell();
    nameHeader.textContent = "Name";

    const locationHeader = headerRow.insertCell();
    locationHeader.textContent = "Location";

    for (let student of studentsList){
        const row = table.insertRow();
        const nameCell = row.insertCell()
        nameCell.textContent = student.firstName;
        const locationCell = row.insertCell();
        locationCell.textContent = student.location;
    }
}
renderTable(studentsList);