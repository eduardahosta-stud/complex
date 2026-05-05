document.addEventListener('DOMContentLoaded', (event) => {
    console.log("script.js: Зв'язок з index.html встановлено!");

    // 1. Simple Alert
	
    document.getElementById('simple_alert').addEventListener('click', () => {
        alert("Hello, I Am Javascript!");
    });

    // 2. Tricky Alert

    document.getElementById('tricky_alert').addEventListener('click', () => {
        const pageTitle = document.getElementById('page_title').textContent;
        alert(pageTitle);
    });

    // 3. Change Title
	
    document.getElementById('change_title').addEventListener('click', () => {
        document.getElementById('page_title').textContent = "New Title";
    });

    // 4. Make Bold

    document.getElementById('make_bold').addEventListener('click', () => {
        const paragraph = document.getElementById('font_change');
        paragraph.style.fontWeight = 'bold';
    });

    // 5. Change Color

    document.getElementById('change_color').addEventListener('click', () => {
        const paragraph = document.getElementById('font_change');
        paragraph.style.color = 'blue';
    });

    // 6. Submit (Повне ім'я)
	
    document.getElementById('names').addEventListener('click', () => {
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        alert(`Повне ім'я: ${firstName} ${lastName}`);
    });


    // 7. Hide/Show Box

    document.getElementById('box').addEventListener('click', (e) => {
        const hideableBox = document.getElementById('hideable');
        const button = e.target;

        if (hideableBox.style.display === 'none') {
            hideableBox.style.display = 'block';
            button.textContent = 'Hide Box';
        } else {
            hideableBox.style.display = 'none';
            button.textContent = 'Show Box';
        }
    });


    // 8. Dynamic List Operations

    const dynamicList = document.getElementById('dynamic_list');


    const createNewListItem = (text) => {
        const li = document.createElement('li');
        const textNode = document.createTextNode(text);
        li.appendChild(textNode);
        return li;
    };


    document.getElementById('add_top_item').addEventListener('click', () => {
        const newItem = createNewListItem('New top element');
        dynamicList.insertBefore(newItem, dynamicList.firstElementChild);
    });


    document.getElementById('remove_top_item').addEventListener('click', () => {
        const firstChild = dynamicList.firstElementChild;
        if (firstChild) {
            dynamicList.removeChild(firstChild);
        }
    });

    document.getElementById('add_bottom_item').addEventListener('click', () => {
        const newItem = createNewListItem('New bottom element');
        dynamicList.appendChild(newItem);
    });

    document.getElementById('remove_bottom_item').addEventListener('click', () => {
        const lastChild = dynamicList.lastElementChild;
        if (lastChild) {
            dynamicList.removeChild(lastChild);
        }
    });


    // 9. Paint Cell

    document.getElementById('paint').addEventListener('click', () => {

        const rowInput = document.getElementById('row_number').value;
        const colInput = document.getElementById('column_number').value;
        const color = document.getElementById('cell_color').value;

        const rowIndex = parseInt(rowInput) - 1;
        const colIndex = parseInt(colInput) - 1;

        if (isNaN(rowIndex) || isNaN(colIndex) || rowIndex < 0 || colIndex < 0) {
            alert("Будь ласка, введіть коректні номери рядка та стовпця (починаючи з 1).");
            return;
        }

        const table = document.getElementById('table');
        const row = table.rows[rowIndex];

        if (row) {
            const cell = row.cells[colIndex];
            if (cell) {
                cell.style.backgroundColor = color;
            } else {
                alert(`Стовпчик ${colInput} не знайдено.`);
            }
        } else {
            alert(`Рядок ${rowInput} не знайдено.`);
        }
    });


    // 10. Menu Active State

    const navLinks = document.querySelectorAll('.navbar li');
    navLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            item.classList.add('active');
        });
    });


    // 11. Automatic Calculations

    const radiusInput = document.getElementById('radius');
    const resultSpan = document.getElementById('result');
    const PI = Math.PI;

    const calculateVolume = () => {
        const radius = parseFloat(radiusInput.value);
        if (isNaN(radius) || radius < 0) {
            resultSpan.textContent = 'Невірне значення радіуса';
            return;
        }
        const volume = (4 / 3) * PI * Math.pow(radius, 3);
        resultSpan.textContent = volume.toFixed(2);
    };
    radiusInput.addEventListener('input', calculateVolume);
    calculateVolume();
});