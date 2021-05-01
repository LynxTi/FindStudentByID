
const studentContainer = document.querySelector('.container-for-student');
const persons = [{name: "Андрей", lastName: "Тимошенко", age: 28, height: 172, weight: 80, iq: 100},
                 {name: "Иван", lastName: "иванов", age: 24 , height: 142, weight: 50, iq: 00},
                 {name: "Петр", lastName: "Петров", age: 27, height: 172, weight: 80, iq: 100},
                 {name: "Николай", lastName: "Николев", iaged: 25, height: 172, weight: 80, iq: 100}];

const onClickBtn = (event) => {
    event.preventDefault();
    const formdata = new FormData(document.querySelector('.form'));
    const id = Number (formdata.get('id'));
    const student = fidnStudentById(students, id);
    console.log(student);
    renderStudent(student);

}

const Student = function(data, id) {
    this.id = id;
    this.name = data.name;
    this.lastName = data.lastName;
    this.age = data.age;
    this.height = data.height;
    this.weight = data.weight;
    this.iq = data.iq;

    this.getK = () => {
        const rezult = this.age / this.height * this.weight + this.iq;
        return rezult;
    }

    this.getInformPerson = () => {
        const str = `№:${this.id}; Имя: ${this.name} ${this.lastName}, Возраст: ${this.age}лет; 
        Рост:${this.height}см.; Вес: ${this.weight}кг.; АКУ: ${this.iq}`;

        return str;
    }
}

const fidnStudentById = (students, id) => {
    const student = students.filter((person) => {
        if (person.id === id) {
            return  person;
        }
    })[0];
    return student;
}

const renderStudent = (student) => {
    const htmlStr = `<div class="student"> 
    <span>${student.getInformPerson()}</span>
    <div>коэффициент K = ${student.getK()}</div>
    </div>`;
    studentContainer.innerHTML = htmlStr;
}

const students = persons.map((element, index) => {
    const student = new Student(element, index);
    return student;
});

document.querySelector('.btnForm').addEventListener('click',onClickBtn);






