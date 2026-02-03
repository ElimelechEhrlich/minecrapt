const body = document.body
const game_page = document.getElementById('game-page')
const inventory = document.getElementById('inventory')
const side_menu = document.getElementById('side-menu')

const rowsNumber = 50
const columnNumber = 50

const c1 = Math.floor((Math.random()) * 16) + 2
const c2 = Math.floor((Math.random()) * 16) + 16//(Math.randint(20))+20
const c3 = Math.floor((Math.random()) * 16) + 32//(Math.randint(20))+35
for (let r = 0; r < rowsNumber; r++) {
    for (let c = 0; c < columnNumber; c++) {
        const cell = document.createElement('div')
        if (r === 12) {
            cell.classList.add('grass', 'by_shovel')
        } else if (r > 12 && r < 18) {
            cell.classList.add('dirt', 'by_shovel')
        } else if (r > 17 && r < 45) {
            cell.classList.add('stone')
        } else if (r > 44 && r <= 50) {
            cell.classList.add('bedrock')
        } else if (r < 12 && r > 7 && (c === c1 || c === c2 || c === c3)) {
            cell.classList.add('oak-log')
        } else if (
            (r <= 8 && r > 6 && ((c > c1 - 3 && c < c1 + 3) || (c > c2 - 3 && c < c2 + 3) || (c > c3 - 3 && c < c3 + 3))) ||
            (r <= 6 && r > 4 && ((c > c1 - 2 && c < c1 + 2) || (c > c2 - 2 && c < c2 + 2) || (c > c3 - 2 && c < c3 + 2))) ||
            (r <= 4 && r > 2 && ((c > c1 - 1 && c < c1 + 1) || (c > c2 - 1 && c < c2 + 1) || (c > c3 - 1 && c < c3 + 1)))) {
            cell.classList.add('oak-leaves')
        }
        cell.classList.add('cell')
        game_page.appendChild(cell)
    }
}

const tool_types = ['pickaxe', 'axe', 'shovel', 'shears']
for (let i = 0; i < tool_types.length; i++) {
    const tool = document.createElement('div')
    tool.classList.add('tool', 'inventory-div')
    tool.id = tool_types[i]
    inventory.appendChild(tool)
}

for (let j = 0; j < 5; j++) {
    const inventory_div = document.createElement('div')
    inventory_div.classList.add('container', 'inventory-div')
    inventory_div.id = `container` + (j + 1)
    inventory.appendChild(inventory_div)
}

const tools = document.getElementsByClassName('tool')
for (let t = 0; t < tools.length; t++) {
    const tool = tools[t]
    const tool_type = tool_types[t]
    tool.addEventListener('click', () => {
        const tool_cursor = "url('/images/" + tool_type + ".png'),auto"
        body.style.cursor = tool_cursor
    })
}

const leaves = document.getElementsByClassName('oak-leaves')
for (let l = 0; l < leaves.length; l++) {
    const leaf = leaves[l]
    leaf.addEventListener('click', () => {
        if (body.style.cursor === 'url("/images/shears.png"), auto') {
            leaf.classList.add('displacement')
            const leaves_container = document.getElementById('container1')
            leaves_container.classList.add('oak-leaves')
            let leaves_quantity = document.getElementById('leaves_quantity')
            if (leaves_quantity) {
                leaves_quantity.textContent = Number(leaves_quantity.textContent) + 1
            } else {
                leaves_quantity = document.createElement("p")
                leaves_quantity.id = 'leaves_quantity'
                leaves_quantity.classList.add('quantity')
                leaves_quantity.textContent = 1
                leaves_container.appendChild(leaves_quantity)
            }
        }
    })
}

const logs = document.getElementsByClassName('oak-log')
for (let l = 0; l < logs.length; l++) {
    const log = logs[l]
    log.addEventListener('click', () => {
        if (body.style.cursor === 'url("/images/axe.png"), auto') {
            log.classList.add('displacement')
            const logs_container = document.getElementById('container2')
            logs_container.classList.add('oak-log')
            let logs_quantity = document.getElementById('logs_quantity')
            if (logs_quantity) {
                logs_quantity.textContent = Number(logs_quantity.textContent) + 1
            } else {
                logs_quantity = document.createElement("p")
                logs_quantity.id = 'logs_quantity'
                logs_quantity.classList.add('quantity')
                logs_quantity.textContent = 1
                logs_container.appendChild(logs_quantity)
            }
        }
    })
}

const dirt_cells = document.getElementsByClassName('by_shovel')
for (let l = 0; l < dirt_cells.length; l++) {
    const dirt_cell = dirt_cells[l]
    dirt_cell.addEventListener('click', () => {
        if (body.style.cursor === 'url("/images/shovel.png"), auto') {
            dirt_cell.classList.add('displacement')
            if (dirt_cell.classList[0] === 'dirt') {
                const dirt_container = document.getElementById('container3')
                dirt_container.classList.add(`${dirt_cell.classList[0]}`)
                let dirt_quantity = document.getElementById('dirt_quantity')
                if (dirt_quantity) {
                    dirt_quantity.textContent = Number(dirt_quantity.textContent) + 1
                } else {
                    dirt_quantity = document.createElement("p")
                    dirt_quantity.id = 'dirt_quantity'
                    dirt_quantity.classList.add('quantity')
                    dirt_quantity.textContent = 1
                    dirt_container.appendChild(dirt_quantity)
                }
            } else if (dirt_cell.classList[0] === 'grass') {
                const grass_container = document.getElementById('container4')
                grass_container.classList.add(`${grass_cell.classList[0]}`)
                let grass_quantity = document.getElementById('grass_quantity')
                if (grass_quantity) {
                    grass_quantity.textContent = Number(grass_quantity.textContent) + 1
                } else {
                    grass_quantity = document.createElement("p")
                    grass_quantity.id = 'grass_quantity'
                    grass_quantity.classList.add('quantity')
                    grass_quantity.textContent = 1
                    grass_container.appendChild(grass_quantity)
                }
            }
        }
    })
}

const stone_cells = document.getElementsByClassName('stone')
for (let l = 0; l < stone_cells.length; l++) {
    const stone_cell = stone_cells[l]
    stone_cell.addEventListener('click', () => {
        if (body.style.cursor === 'url("/images/pickaxe.png"), auto') {
            stone_cell.classList.add('displacement')
            const stone_container = document.getElementById('container5')
            stone_container.classList.add('stone')
            let stone_quantity = document.getElementById('stone_quantity')
            if (stone_quantity) {
                stone_quantity.textContent = Number(stone_quantity.textContent) + 1
            } else {
                stone_quantity = document.createElement("p")
                stone_quantity.id = 'stone_quantity'
                stone_quantity.classList.add('quantity')
                stone_quantity.textContent = 1
                stone_container.appendChild(stone_quantity)
            }
        }
    })
}


const cell_types = ['oak-leaves', 'oak-log', 'dirt', 'grass', 'stone']
const containers = document.getElementsByClassName('container')
if (containers) {
    for (let t = 0; t < containers.length; t++) {
        const container = containers[t]
        const cell_type = cell_types[t]
        container.addEventListener('click', () => {
            const cell_cursor = "url('/images/" + cell_type + ".png'),auto"
            body.style.cursor = cell_cursor
        })
    }
}

const cells = document.getElementsByClassName('cell')
for (let c = 0; c < cells.length; c++) {
    const cell = cells[c]
    console.log((body.style.cursor === "url('/images/" + cell_type + ".png'),auto"));
    
    if ((cell.classList.contains('displacement')) || (cell.classList[-1] === 'cell' && cell.classList.length <= 1)) {
        cell.addEventListener('click', () => {
            cell_types.forEach((cell_type, i) => {
                console.log(cell_types[i]);
                
                console.log(cell_type);
                console.log((body.style.cursor === "url('/images/" + cell_type + ".png'),auto"));
                
                if (body.style.cursor === "url('/images/" + cell_type + ".png'),auto") {
                    console.log(cell);
                    console.log(body.style.cursor);
                    cell.classList.remove(`displacement`)
                    cell.classList.add(`${cell_type}`)
                }
            });
        })
    }
}







// diamond-pickaxe
// diamond-axe
// diamond-shovel
// shears