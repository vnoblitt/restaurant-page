const homeTab = document.createElement('div');
homeTab.innerHTML = `
        <div class="header">
            <h1>V's Pizzeria</h1>
        </div>

        <div class="blurb">
            <h2>No dashers, no drama, just dinner, delivered.</h2>
            <p>We don't think a slice should cost an arm and a leg. 
            All of our delivery drivers are paid a fair salary with a comprhensive healthcare plan.
            We make our employees our business, because the only decision you should be making is: 
            medium or large?</p>
            <h3>- V</h3>
        </div>

        <div class="hours-container">
            <h2>Hours</h2>
            <div class="hours">
                <div>Sunday: 11am - 8pm</div>
                <div>Monday: 11am - 9pm</div>
                <div>Tuesday: Closed</div>
                <div>Wednesday: 11am - 9pm</div>
                <div>Thursday: 11am - 9pm</div>
                <div>Friday: 11am - 11pm</div>
                <div>Saturday: 11am - 11pm</div>
            </div>
        </div>
`
/*
const homeHeader = document.createElement('div');
homeHeader.classList.add('header');
const homeBlurb = document.createElement('div');
homeBlurb.classList.add('blurb');
const homeHoursContainer = document.createElement('div');
homeHoursContainer.classList.add('hour-container');
const homeHours = document.createElement('div');
homeHours.classList.add('hours');

const headerText = document.createElement('h1');
headerText.textContent = "V's Pizzeria"

const blurbH2 = document.createElement('h2');
blurbH2.textContent = 'No dashers, no drama, just dinner, delivered.';
const blurbP = document.createElement('p');
blurbP.textContent = `We don't think a slice should cost an arm and a leg. 
            All of our delivery drivers are paid a fair salary with a comprhensive healthcare plan.
            We make our employees our business, because the only decision you should be making is: 
            medium or large?`;
const blurbH3 = document.createElement('h3');
blurbH3.textContent = '- V';

const hoursContainerH2 = document.createElement('h2');
hoursContainerH2.textContent = 'Hours';

homeHeader.append(headerText);

homeTab.append(homeHeader);
*/
export {homeTab};