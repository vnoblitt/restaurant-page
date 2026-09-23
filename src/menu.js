const menuTab = document.createElement('div');
menuTab.innerHTML = `
        <div class="header">
            <h1>Menu</h1>
        </div>

        <div class="menu">
            <div class="menu-section">
                Pizzas
                <div class="menu-item">Cheese</div>
                <div class="menu-item">Pepperoni</div>
                <div class="menu-item">Hawaiian</div>
                <div class="menu-item">Margherita</div>
                <div class="menu-item">Meatlover's</div>
                <div class="menu-item">BBQ Chicken</div>
                <div class="menu-item">Spicy Chicken</div>
                <div class="menu-item">Supreme</div>
            </div>
            <div class="menu-section">
                Milkshakes
                <div class="menu-item">Vanilla</div>
                <div class="menu-item">Chocolate</div>
                <div class="menu-item">Strawberry</div>
            </div>
            <div class="menu-section">
                Drinks
                <div class="menu-item">Cola</div>
                <div class="menu-item">Root Beer</div>
                <div class="menu-item">Lemonade</div>
                <div class="menu-item">Iced Tea</div>
            </div>           
        </div>
`

export {menuTab}