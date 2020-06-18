arr1 = []
arr2 = []
arr3 = []
arr4 = []
arr5 = []
arr6 = []

function RecieveData() {


    // name
    var showName = document.getElementById('name').value
    var nameValue = document.createElement('div')
    nameValue.innerHTML = showName
    document.getElementById("nameShow").append(nameValue)

    // class
    var showClass = document.getElementById('class').value
    var classValue = document.createElement('div')
    classValue.innerHTML = showClass
    document.getElementById("classShow").append(classValue)

    // section
    var showSection = document.getElementById('section').value
    var sectionValue = document.createElement('div')
    sectionValue.innerHTML = showSection
    document.getElementById("sectionShow").append(sectionValue)

    // MATH
    var showMath = Number(document.getElementById('math').value)
    arr1.push(showMath)
    console.log(arr1)
    var mathValue = document.createElement('div')
    mathValue.innerHTML = showMath
    document.getElementById("mathShow").append(mathValue)

    // BIOLOGY
    var showBiology = Number(document.getElementById('biology').value)
    arr2.push(showBiology)
    console.log(arr2)
    var bioValue = document.createElement('div')
    bioValue.innerHTML = showBiology
    document.getElementById("bioShow").append(bioValue)

    // chemistry
    var showChem = Number(document.getElementById('chemistry').value)
    arr3.push(showChem)
    console.log(arr3)
    var chemValue = document.createElement('div')
    chemValue.innerHTML = showChem
    document.getElementById("chemShow").append(chemValue)

    // PHYSICS
    var showPhy = Number(document.getElementById('physics').value)
    arr4.push(showPhy)
    console.log(arr4)
    var phyValue = document.createElement('div')
    phyValue.innerHTML = showPhy
    document.getElementById("phyShow").append(phyValue)

    // ENGLISH
    var showEng = Number(document.getElementById('english').value)
    arr5.push(showEng)
    console.log(arr5)
    var engValue = document.createElement('div')
    engValue.innerHTML = showEng
    document.getElementById("engShow").append(engValue)

    // invoke
    total()
    show()
}

function total() {
    var sum = 0,
        percnt

    for (var i = 0; i < arr1.length; i++) {
        sum = arr1[i] + arr2[i] + arr3[i] + arr4[i] + arr5[i]
        percnt = Math.floor((sum / 500) * 100)
        arr6.push(percnt)
    }

    // TOTAL
    var totalValue = document.createElement('div')
    totalValue.innerHTML = sum
    document.getElementById("totalShow").append(totalValue)

    // PERCENTAGE
    var percntValue = document.createElement('div')
    percntValue.innerHTML = percnt
    document.getElementById("percntShow").append(percntValue)
}

function show() {
    var grade


    for (var i = 0; i < arr6.length; i++) {
        if (arr6[i] <= 33) {
            grade = "Fail"
        } else if (arr6[i] > 33 && arr6[i] < 66) {
            grade = "Grade-B"
        } else {
            grade = "Grade-A"
        }
    }

    // GRADES
    var gradeValue = document.createElement('div')
    gradeValue.innerHTML = grade
    document.getElementById("gradeShow").append(gradeValue)

}