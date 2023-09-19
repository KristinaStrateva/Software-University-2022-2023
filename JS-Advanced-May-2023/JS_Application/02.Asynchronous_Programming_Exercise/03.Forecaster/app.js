function attachEvents() {
    const locationInputElement = document.getElementById('location');
    const submitButtonElement = document.getElementById('submit');
    const mainForecastDivElement = document.getElementById('forecast');
    const currentForecastElement = document.getElementById('current');
    const upcomingForecastElement = document.getElementById('upcoming');
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    submitButtonElement.addEventListener('click', onSubmit);

    function onSubmit() {
        const locationName = locationInputElement.value;

        mainForecastDivElement.style.display = 'block';

        fetch(`${baseUrl}/locations`)
            .then(res => res.json())
            .then(data => {
                const locationsArr = [...data];

                const locationData = locationsArr.find(x => x.name === locationName);

                fetch(`${baseUrl}/today/${locationData.code}`)
                    .then(res => res.json())
                    .then(data => {
                        const currName = data.name;
                        const currlowTemp = data.forecast.low;
                        const currHighTemp = data.forecast.high;
                        const currCondition = data.forecast.condition;
                        let symbol = '';

                        if (currCondition === 'Sunny') {
                            symbol = '&#x2600;';
                        } else if (currCondition === 'Partly sunny') {
                            symbol = '&#x26C5;';
                        } else if (currCondition === 'Overcast') {
                            symbol = '&#x2601;';
                        } else if (currCondition === 'Rain') {
                            symbol = '&#x2614;';
                        }

                        const newDivElement = document.createElement('div');
                        newDivElement.classList = 'forecasts';

                        const spanConditionSymbolElement = document.createElement('span');
                        spanConditionSymbolElement.classList = 'condition symbol';
                        spanConditionSymbolElement.innerHTML = symbol;

                        const spanConditionInfoElement = document.createElement('span');
                        spanConditionInfoElement.classList = 'condition';

                        const spanNameElement = document.createElement('span');
                        spanNameElement.classList = 'forecast-data';
                        spanNameElement.textContent = currName;

                        const spanDegreesElement = document.createElement('span');
                        spanDegreesElement.classList = 'forecast-data';
                        spanDegreesElement.innerHTML = `${currlowTemp}&#176;/${currHighTemp}&#176;`;

                        const spanConditionElement = document.createElement('span');
                        spanConditionElement.classList = 'forecast-data';
                        spanConditionElement.textContent = currCondition;

                        spanConditionInfoElement.appendChild(spanNameElement);
                        spanConditionInfoElement.appendChild(spanDegreesElement);
                        spanConditionInfoElement.appendChild(spanConditionElement);

                        newDivElement.appendChild(spanConditionSymbolElement);
                        newDivElement.appendChild(spanConditionInfoElement);

                        currentForecastElement.appendChild(newDivElement);
                    });

                fetch(`${baseUrl}/upcoming/${locationData.code}`)
                    .then(res => res.json())
                    .then(data => {
                        const newDivElement = document.createElement('div');
                        newDivElement.classList = 'forecast-info';

                        data.forecast.forEach(info => {
                            const currLowTemp = info.low;
                            const currHighTemp = info.high;
                            const currCondition = info.condition;
                            let symbol = '';

                            if (currCondition === 'Sunny') {
                                symbol = '&#x2600;';
                            } else if (currCondition === 'Partly sunny') {
                                symbol = '&#x26C5;';
                            } else if (currCondition === 'Overcast') {
                                symbol = '&#x2601;';
                            } else if (currCondition === 'Rain') {
                                symbol = '&#x2614;';
                            }

                            const mainSpanElement = document.createElement('span');
                            mainSpanElement.classList = 'upcoming';

                            const spanConditionSymbolElement = document.createElement('span');
                            spanConditionSymbolElement.classList = 'symbol';
                            spanConditionSymbolElement.innerHTML = symbol;

                            const spanDegreesElement = document.createElement('span');
                            spanDegreesElement.classList = 'forecast-data';
                            spanDegreesElement.innerHTML = `${currLowTemp}&#176;/${currHighTemp}&#176;`;

                            const spanConditionElement = document.createElement('span');
                            spanConditionElement.classList = 'forecast-data';
                            spanConditionElement.textContent = currCondition;

                            mainSpanElement.appendChild(spanConditionSymbolElement);
                            mainSpanElement.appendChild(spanDegreesElement);
                            mainSpanElement.appendChild(spanConditionElement);

                            newDivElement.appendChild(mainSpanElement);
                        });

                        upcomingForecastElement.appendChild(newDivElement);
                    });
            })
            .catch(err => {
                const newParagraph = document.createElement('p');
                newParagraph.textContent = 'Error';

                mainForecastDivElement.appendChild(newParagraph);
            });

        if (currentForecastElement.children[1] && upcomingForecastElement.children[1]) {
            currentForecastElement.children[1].remove();
            upcomingForecastElement.children[1].remove();
        }

        if (mainForecastDivElement.children[2]) {
            mainForecastDivElement.children[2].remove();
        }
    }
}

attachEvents();