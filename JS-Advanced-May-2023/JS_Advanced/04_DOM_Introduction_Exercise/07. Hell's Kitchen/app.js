function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const inputElement = document.querySelector('#inputs>textarea');
   const bestRestaurantElement = document.querySelector('#bestRestaurant p');
   const bestRestaurantWorkersElement = document.querySelector('#workers p');

   function onClick() {
      const inputArr = JSON.parse(inputElement.value);
      let restaurants = {};

      for (const line of inputArr) {
         let [restaurantName, workersInfo] = line.split(' - ');
         let currWorkers = workersInfo.split(', ');
         let currTotalSalary = 0;

         currWorkers.forEach(worker => {
            let [workerName, salary] = worker.split(' ');

            currTotalSalary += Number(salary);
         });

         if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = { workers: [], averageSalary: 0, totalSalary: 0 };
         }

         restaurants[restaurantName].workers.push(...currWorkers);
         restaurants[restaurantName].workers.sort((a, b) => Number(b.split(' ')[1]) - Number(a.split(' ')[1]));
         restaurants[restaurantName].totalSalary += currTotalSalary;
         restaurants[restaurantName].averageSalary = restaurants[restaurantName].totalSalary / restaurants[restaurantName].workers.length;
      }

      const sortedRestaurants = Object.entries(restaurants).sort((a, b) => b[1].averageSalary - a[1].averageSalary);
      const bestRestaurantName = sortedRestaurants[0][0];
      const bestAverageSalary = sortedRestaurants[0][1].averageSalary.toFixed(2);
      const bestSalary = Number(sortedRestaurants[0][1].workers[0].split(' ')[1]).toFixed(2);

      bestRestaurantElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary} Best Salary: ${bestSalary}`;

      let bestRestaurantWorkersInfo = ``;

      sortedRestaurants[0][1].workers.forEach(workerInfo => {
         const [workerName, salary] = workerInfo.split(' ');

         bestRestaurantWorkersInfo += `Name: ${workerName} With Salary: ${salary} `;
      });

      bestRestaurantWorkersElement.textContent = bestRestaurantWorkersInfo.trim();
   }
}