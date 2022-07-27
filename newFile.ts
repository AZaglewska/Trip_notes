class NewClass {
  insertElement() {
    const textAreaSpreadsheetData = [
      { 1: '1', 2: '2' },
      { 1: '1', 2: '2' },
    ];

    const newArr = textAreaSpreadsheetData.map((el) => {
      const si = Object.values(el);

      const emptyString = Array.from(Array(si.length)).map(() => '');

      const bla = [emptyString, ...si];
      return bla;
    });
    console.log(newArr);
  }
}

const newObj = new NewClass();
newObj.insertElement();
