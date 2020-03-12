        const leftLifePlace = document.querySelector('div.scoreleft')
        const rightLifePlace = document.querySelector('div.scoreright')
        const plusLeft = document.querySelector('button.plusleft')
        const minusLeft = document.querySelector('button.minusleft')
        const plusRight = document.querySelector('button.plusright')
        const minusRight = document.querySelector('button.minusright')
        const reset = document.querySelector('button.reset')

        /*Ustawienie życia początkowego zawodników*/

        let lifeLeft = 20;
        let lifeRight = 20;

        leftLifePlace.textContent = lifeLeft;
        rightLifePlace.textContent = lifeRight;

        /*Zaprogramowanie lewego guzika "+" oraz "-"*/

        plusLeft.addEventListener('click', () => {

            lifeLeft += 1;

            if (lifeLeft < lifeRight) leftLifePlace.style.color = 'red';
            else if (lifeLeft === lifeRight) {
                leftLifePlace.style.color = 'black';
                rightLifePlace.style.color = 'black';
            } else {
                rightLifePlace.style.color = 'red';
            }

            leftLifePlace.textContent = lifeLeft;
        })

        minusLeft.addEventListener('click', () => {

            lifeLeft -= 1;

            if (lifeLeft < lifeRight) leftLifePlace.style.color = 'red';
            else if (lifeLeft === lifeRight) {
                leftLifePlace.style.color = 'black';
                rightLifePlace.style.color = 'black';
            }

            leftLifePlace.textContent = lifeLeft;
        })

        /*Zaprogramowanie prawego guzika "+" oraz "-"*/

        plusRight.addEventListener('click', () => {

            lifeRight += 1;

            if (lifeRight < lifeLeft) rightLifePlace.style.color = 'red';
            else if (lifeLeft === lifeRight) {
                leftLifePlace.style.color = 'black';
                rightLifePlace.style.color = 'black';
            } else {
                leftLifePlace.style.color = 'red';
            }

            rightLifePlace.textContent = lifeRight;
        })

        minusRight.addEventListener('click', () => {

            lifeRight -= 1;

            if (lifeRight < lifeLeft) rightLifePlace.style.color = 'red';
            else if (lifeRight === lifeLeft) {
                rightLifePlace.style.color = 'black';
                leftLifePlace.style.color = 'black';
            }

            rightLifePlace.textContent = lifeRight;
        })

        /*Zaprogramowanie guzika RESETUJ WYNIK*/

        reset.addEventListener('click', () => {

            lifeLeft = 20;
            lifeRight = 20;

            leftLifePlace.style.color = 'black';
            rightLifePlace.style.color = 'black';

            leftLifePlace.textContent = lifeLeft;
            rightLifePlace.textContent = lifeRight;
        })