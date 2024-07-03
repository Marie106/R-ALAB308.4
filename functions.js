// Part 2: Parse CSV Data
function parseCSV(data) {
    const rows = data.split('\n');
    const parsedData = [];
    const numberOfColumns = rows[0].split(',').length;

    for (const row of rows) {
        const cells = row.split(',');
        if (cells.length !== numberOfColumns) {
            throw new Error('Row does not have the correct number of columns');
        }
        parsedData.push(cells);
    }

    return parsedData;
}

// Part 3: Transform CSV Data to Objects
function transformCSVToObjects(parsedData) {
    const headings = parsedData[0].map(heading => heading.toLowerCase());
    const objectsArray = [];

    for (let i = 1; i < parsedData.length; i++) {
        const row = parsedData[i];
        const rowObject = {};

        for (let j = 0; j < row.length; j++) {
            rowObject[headings[j]] = row[j];
        }

        objectsArray.push(rowObject);
    }

    return objectsArray;
}

// Part 4: Manipulate Data
function manipulateData(data) {
    data.pop();
    data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
    data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

    return data;
}

// Calculate average age
function calculateAverageAge(data) {
    let totalAge = 0;
    for (const person of data) {
        totalAge += parseInt(person.age, 10);
    }
    return totalAge / data.length;
}

// Part 5: Convert Objects to CSV
function objectsToCSV(dataArray) {
    const headings = Object.keys(dataArray[0]);
    let csvString = headings.join(',') + '\n';

    for (const obj of dataArray) {
        const row = headings.map(heading => obj[heading]).join(',');
        csvString += row + '\n';
    }

    return csvString.trim();
}

// Example CSV data
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Parse, transform, and manipulate data
const parsedData = parseCSV(csvData);
const transformedData = transformCSVToObjects(parsedData);
const manipulatedData = manipulateData(transformedData);

// Log manipulated data
console.log(manipulatedData);

// Calculate and log average age
const averageAge = calculateAverageAge(manipulatedData);
console.log('Average age:', averageAge);

// Convert back to CSV and log result
const csvOutput = objectsToCSV(manipulatedData);
console.log(csvOutput);