var students = [];

function addStudent(name, grades) {
  if (students.some((student) => student.name === name)) {
    throw new Error("Schüler existiert bereits!");
  }

  var parsedGrades = grades.split(" ").map((grade) => {
    var parsedGrade = parseFloat(grade);
    if (isNaN(parsedGrade) || parsedGrade < 1.0 || parsedGrade > 6.0) {
      throw new Error("Ungültige Note: " + grade);
    }
    return parsedGrade;
  });

  students.push({
    name: name,
    grades: parsedGrades,
  });
}

function calculateAverage() {
  var totalSum = students.reduce((acc, student) => {
    return (
      acc +
      student.grades.reduce((secondAcc, grade) => {
        return secondAcc + grade;
      }, 0)
    );
  }, 0);
  var totalCount = students.reduce((acc, student) => {
    return acc + student.grades.length;
  }, 0);

  var average = totalSum / totalCount;
  var description;

  switch (true) {
    case average === 6.0:
      description = "Sehr gut";
      break;
    case average >= 5.0 && average < 6.0:
      description = "Gut";
      break;
    case average >= 4.0 && average < 5.0:
      description = "Befriedigend";
      break;
    case average >= 3.0 && average < 4.0:
      description = "Ausreichend";
      break;
    default:
      description = "Mangelhaft";
      break;
  }

  return {
    average: average.toFixed(2),
    description: description,
  };
}

function findStudentByAverage(comparator) {
  var bestStudent = students.reduce((acc, student) => {
    var average =
      student.grades.reduce((secondAcc, grade) => {
        return secondAcc + grade;
      }, 0) / student.grades.length;

    if (!acc || comparator(average, acc.average)) {
      return {
        name: student.name,
        average: average.toFixed(2),
      };
    } else {
      return acc;
    }
  }, null);

  return bestStudent;
}

function sortStudentsByAverage() {
  var sortedStudents = students.slice().sort((a, b) => {
    var averageA =
      a.grades.reduce((acc, grade) => {
        return acc + grade;
      }, 0) / a.grades.length;

    var averageB =
      b.grades.reduce((acc, grade) => {
        return acc + grade;
      }, 0) / b.grades.length;

    return averageA - averageB;
  });

  return sortedStudents.map((student) => {
    return student.name;
  });
}

function updateResults() {
  var resultElement = document.getElementById("result");
  var averageResult = calculateAverage();
  var bestStudent = findStudentByAverage((a, b) => {
    return a > b;
  });
  var worstStudent = findStudentByAverage((a, b) => {
    return a < b;
  });
  var sortedStudents = sortStudentsByAverage();

  resultElement.innerHTML = `
        Durchschnitt: ${averageResult.average} (${averageResult.description})<br>
        Bester Schüler: ${bestStudent.name} (${bestStudent.average})<br>
        Schlechtester Schüler: ${worstStudent.name} (${worstStudent.average})<br>
        Sortierte Schülerliste: ${sortedStudents.join(", ")}
    `;
}

function main() {
  var nameInput = document.getElementById("name");
  var gradesInput = document.getElementById("grades");

  try {
    addStudent(nameInput.value, gradesInput.value);
    nameInput.value = "";
    gradesInput.value = "";
    updateResults();
  } catch (error) {
    alert(error.message);
  }
}
